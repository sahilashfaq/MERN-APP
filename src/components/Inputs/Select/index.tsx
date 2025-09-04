import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { Select as MantineSelect } from "@mantine/core";
import type { SelectInputProps } from "./props";

export const SelectInput = ({
  name,
  control,
  ...restProps
}: SelectInputProps) => {
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <MantineSelect
            {...field}
            {...restProps}
            value={field.value}
            onChange={field.onChange}
            size="md"
            radius="md"
            error={error?.message}
          />
        )}
      />
    </Fragment>
  );
};
