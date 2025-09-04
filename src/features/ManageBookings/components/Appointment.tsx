import {
  Button,
  Box,
  Grid,
  Container,
  Stack,
  Title,
  Image,
  Text,
  Paper,
  Center,
  Modal,
} from "@mantine/core";
import { IconArrowUpRight, IconX } from "@tabler/icons-react";
import { TextInput } from "../../../components/Inputs/TextInput";
import { CustomButton } from "../../../components/Buttons";
import { CustomBadge } from "../../../components/Badge";
import { DatePicker } from "../../../components/Inputs/DatePicker";
import { TextArea } from "../../../components/Inputs/Textarea";
import { SelectInput } from "../../../components/Inputs/Select";
import { useBookingData } from "../hooks/useData";
import { useEffect } from "react";
import { showNotification } from "@mantine/notifications";

export default function AppointmentSection() {
  const {
    handleSubmit,
    onSubmit,
    close,
    error,
    control,
    inputStyles,
    errors,
    theme,
    opened,
  } = useBookingData();

  // Show notification on error
  useEffect(() => {
    if (error) {
      showNotification({
        title: "Booking Failed",
        message: error.message || "Something went wrong. Please try again.",
        color: "red",
        icon: <IconX size={18} />,
        autoClose: 5000,
      });
    }
  }, [error]);

  return (
    <Box bg={"#E9F0EC"} py={{ base: 50, md: 80 }}>
      <Container size="lg">
        <Stack align="center" gap="xs" mb="xl">
          <CustomBadge>Stay With US</CustomBadge>
          <Title
            order={2}
            ta="center"
            fz={{ base: "2rem", md: "2.8rem" }}
            c={theme.colors.dark[8]}
          >
            Make An Appointment
          </Title>
        </Stack>

        <Grid gutter={{ base: "xl", md: 40 }}>
          {/* Form Section */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Paper withBorder radius="lg" p={{ base: "md", sm: "xl" }}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack gap="lg">
                  <Grid>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        name="firstName"
                        control={control}
                        label="First Name"
                        placeholder="Ex. first name"
                        styles={inputStyles}
                        error={errors.firstName?.message}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        name="lastName"
                        control={control}
                        label="Last Name"
                        placeholder="Ex. last name"
                        styles={inputStyles}
                        error={errors.lastName?.message}
                      />
                    </Grid.Col>
                  </Grid>

                  <Grid>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        name="email"
                        control={control}
                        label="Email"
                        placeholder="Ex. info@domain.com"
                        styles={inputStyles}
                        error={errors.email?.message}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        name="phone"
                        control={control}
                        label="Phone"
                        placeholder="Ex. (+1) 987 654 3210"
                        styles={inputStyles}
                        error={errors.phone?.message}
                      />
                    </Grid.Col>
                  </Grid>

                  <Grid>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <SelectInput
                        name="roomType"
                        control={control}
                        label="Select Type"
                        placeholder="Select Room"
                        data={["Standard", "Deluxe", "Suite"]}
                        clearable
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <SelectInput
                        name="roomSize"
                        control={control}
                        label="Select Room"
                        placeholder="Select Room"
                        data={["Single Room", "Double Room", "Family Room"]}
                        clearable
                      />
                    </Grid.Col>
                  </Grid>

                  <Grid>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <DatePicker
                        name="checkIn"
                        control={control}
                        label="Check In"
                        placeholder="Select date"
                        withCellSpacing
                      />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <DatePicker
                        name="checkOut"
                        control={control}
                        label="Check Out"
                        placeholder="Select date"
                      />
                    </Grid.Col>
                  </Grid>

                  <TextArea
                    name="message"
                    control={control}
                    label="Message"
                    placeholder="Ex. type message"
                    minRows={4}
                  />

                  <Button
                    type="submit"
                    color="#1f8f6a"
                    mt="md"
                    radius="sm"
                    rightSection={<IconArrowUpRight size={16} />}
                    style={{ width: "fit-content", alignSelf: "flex-start" }}
                    // onClick={onSubmit}
                  >
                    Book Appointment
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Box h="100%" style={{ minHeight: 400 }}>
              <Paper bg="#1f8f6a" radius="lg" p="xl" h="100%">
                <Image src={"/images/appointment.png"} radius={"12px"} />
                <Center>
                  <Stack gap="sm" c="white" mt="xl">
                    <Title order={2} c="white">
                      (+1) 987 654 3210
                    </Title>
                    <Text ta="center">Mon-Fri: 7:00 AM - 9:00 PM</Text>
                    <Text ta="center">24/7 Service Available</Text>
                    <CustomButton rightSection={<IconArrowUpRight size={16} />}>
                      Call Us Now
                    </CustomButton>
                  </Stack>
                </Center>
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>

      <Modal opened={opened} onClose={close} centered>
        <Title ta={"center"}>Thank You!</Title>
        <Text size="18px" ta={"center"} mt={"lg"}>
          Your appointment has been booked successfully. We'll be in touch soon.
        </Text>

        <Button color="#1f8f6a" mt="md" radius="sm" onClick={close} fullWidth>
          Close
        </Button>
      </Modal>
    </Box>
  );
}
