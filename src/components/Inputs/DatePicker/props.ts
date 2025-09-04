import type { Control } from "react-hook-form";
import type { DatePickerInputProps as MantineDatePickerInputProps } from "@mantine/dates";

export type DatePickerProps = {
  name: string;
  label?: string;
  control?: Control<any>;
} & MantineDatePickerInputProps;
