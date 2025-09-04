import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { Textarea as MantineTextarea } from "@mantine/core";
import type { TextAreaProps } from "./props";

export const TextArea = ({ name, control, ...restProps }: TextAreaProps) => {
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <MantineTextarea
            {...restProps}
            {...field}
            size="md"
            error={error?.message}
          />
        )}
      />
    </Fragment>
  );
};
