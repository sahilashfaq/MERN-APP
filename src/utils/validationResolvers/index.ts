// utils/validationResolvers.ts
import { z } from "zod";

export const appointmentSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Must be a valid email." }),
    phone: z.string().min(1, { message: "Phone number is required." }),
    roomType: z.string().min(1, { message: "Please select a room type." }),
    roomSize: z.string().min(1, { message: "Please select a room size." }),

    checkIn: z.coerce.date({
      message: "Check-in date is required.",
    }),
    checkOut: z.coerce.date({
      message: "Check-out date is required.",
    }),

    message: z.string().optional(),
  })
  .refine((data) => data.checkOut > data.checkIn, {
    message: "Check-out date must be after check-in date.",
    path: ["checkOut"],
  });
