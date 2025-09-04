import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { appointmentSchema } from "../../../../utils/validationResolvers";
import { useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { BookingService } from "../../../../services/BookingService";
import { roomsData } from "../../../../constants/dummyData";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDisclosure } from "@mantine/hooks";

export const useBookingData = () => {
  const theme = useMantineTheme();
  const queryClient = useQueryClient();
  const [opened, { open, close }] = useDisclosure(false);

  const {
    data: rooms,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => BookingService.getAll(),
    retry: 1, // prevent infinite retries
    refetchOnWindowFocus: false,
  });

  const [showDummy, setShowDummy] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setShowDummy(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const roomList =
    !isLoading &&
    !isError &&
    Array.isArray(rooms?.data) &&
    rooms.data.length > 0
      ? rooms.data
      : roomsData;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      roomType: "",
      roomSize: "",
      checkIn: undefined,
      checkOut: undefined,
      message: "",
    },
    mode: "onSubmit",
  });

  const inputStyles = {
    input: {
      backgroundColor: theme.colors.gray[1],
      border: "none",
    },
  };

  // Inside your useBookingData hook

  const mutation = useMutation({
    mutationFn: (data: any) => BookingService.addAppointment(data),
    onSuccess: (data) => {
      open();
      reset();
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      console.log("Appointment saved:", data);
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  const onSubmit = (data: any) => {
    console.log("Appointment data:", data);
    mutation.mutate({
      ...data,
      checkIn: data.checkIn ? data.checkIn.toISOString() : null,
      checkOut: data.checkOut ? data.checkOut.toISOString() : null,
    });
  };

  return {
    handleSubmit,
    onSubmit,
    open,
    close,
    control,
    opened,
    inputStyles,
    errors,
    theme,
    isLoading,
    showDummy,
    roomList,
    error: mutation.error,
  };
};
