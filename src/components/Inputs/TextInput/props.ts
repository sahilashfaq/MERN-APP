import type { Control } from "react-hook-form";
import type { TextInputProps as MantineTextInputProps } from "@mantine/core";

export type TextInputProps = {
  name: string;
  label?: string;
  control?: Control<any>;
} & MantineTextInputProps;
