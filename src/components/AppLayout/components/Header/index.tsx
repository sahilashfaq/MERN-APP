import React from "react";
import { Group, Text, Anchor, Burger, ThemeIcon, Image } from "@mantine/core";
import { MENU } from "../../../../constants/routes";
import { CustomButton } from "../../../Buttons";
import { socialIcons } from "../../../../constants/social";
import "./style.css";
import { useMediaQuery } from "@mantine/hooks";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ opened, toggle }) => {
  const contactInfo = [
    "7631 Sabina Park, 115 Devon Isle, USA",
    "info@domain.com",
    "(+1)987 654 3310",
  ];

  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // sm breakpoint

  return (
    <>
      <Group
        bg="#1f8f6a"
        justify="space-between"
        px="md"
        py="xs"
        style={{ color: "white" }}
      >
        <Group gap="lg">
          {contactInfo.map((item, index) => (
            <Group key={index} gap={5}>
              <ThemeIcon size={10} radius={0} bg="yellow" />
              <Text size="sm">{item}</Text>
            </Group>
          ))}
        </Group>

        <Group gap="sm">
          {socialIcons.map((Icon) => (
            <Icon size={25} color="white" />
          ))}
        </Group>
      </Group>

      <Group justify="space-between" h="100%" bg="#272727">
        <div className={"logoContainer"}>
          <Image src={"/images/logo.png"} w={140} alt={"Logo"} />{" "}
        </div>

        <Group gap="lg" visibleFrom="sm">
          {Object.values(MENU).map((route) => (
            <Anchor key={route.path} href={route.path} c="white">
              {route.label}
            </Anchor>
          ))}
        </Group>

        <Group mr={"sm"}>
          {!isSmallScreen && <CustomButton>Book Your Stay</CustomButton>}

          <Burger
            color={"white"}
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
          />
        </Group>
      </Group>
    </>
  );
};
