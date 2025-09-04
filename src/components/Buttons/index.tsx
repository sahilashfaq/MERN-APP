import React from "react";
import { Button } from "@mantine/core";
import type { ButtonProps } from "@mantine/core";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  radius = "md",
  style,
  ...props
}) => {
  return (
    <Button
      radius="2px"
      bg="#e4c466"
      style={{
        color: "black",
        ...style,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
