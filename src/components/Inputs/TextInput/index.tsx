import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { TextInput as MantineTextInput } from "@mantine/core";
import type { TextInputProps } from "./props";

export const TextInput = ({ name, control, ...restProps }: TextInputProps) => {
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <MantineTextInput
            {...field}
            {...restProps}
            size="md"
            error={error?.message}
          />
        )}
      />
    </Fragment>
  );
};
