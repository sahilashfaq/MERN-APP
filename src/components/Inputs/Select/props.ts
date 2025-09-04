import type { Control } from "react-hook-form";
import type { SelectProps as MantineSelectProps } from "@mantine/core";

export type SelectInputProps = {
  name: string;
  label?: string;
  control: Control<any>;
} & MantineSelectProps;
