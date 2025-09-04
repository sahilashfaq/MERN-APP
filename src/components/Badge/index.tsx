// components/Badge/CustomBadge.tsx
import { Badge } from "@mantine/core";
import type { BadgeProps } from "@mantine/core";
import React from "react";

interface CustomBadgeProps extends BadgeProps {
  children: React.ReactNode;
}

export const CustomBadge: React.FC<CustomBadgeProps> = ({
  children,
  ...props
}) => {
  return (
    <Badge
      variant="outline"
      size="lg"
      color="#1f8f6a"
      radius="sm"
      bg={"white"}
      {...props}
    >
      {children}
    </Badge>
  );
};
