import type { Control } from "react-hook-form";
import type { TextareaProps as MantineTextareaProps } from "@mantine/core";

export type TextAreaProps = {
  name: string;
  label?: string;
  control?: Control<any>;
} & MantineTextareaProps;
