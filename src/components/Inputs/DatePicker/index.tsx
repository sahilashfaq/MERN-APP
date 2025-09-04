import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { DatePickerInput } from "@mantine/dates";
import type { DatePickerProps } from "./props";

export const DatePicker = ({
  name,
  control,
  ...restProps
}: DatePickerProps) => {
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DatePickerInput
            {...restProps}
            {...field}
            size="md"
            radius="md"
            error={error?.message}
            value={field.value || null} // ensure controlled value
            onChange={(val) => field.onChange(val)}
            placeholder="Select date"
            dropdownType="popover" // fixes the full-width issue
          />
        )}
      />
    </Fragment>
  );
};
