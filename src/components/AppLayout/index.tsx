import React from "react";
import {
  AppShell,
  Drawer,
  Stack,
  Anchor,
  Image,
  Container,
  Title,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "./components/Header";
import { MENU } from "../../constants/routes";
import { CustomButton } from "../Buttons";
import { Footer } from "./components/Footer";
import { useLocation } from "react-router-dom";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === "/") return "Home";
    return location.pathname
      .replace("/", "")
      .replace("-", " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };
  return (
    <AppShell header={{ height: 70 }}>
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      {/* DRAWER (Mobile Nav) */}
      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        hiddenFrom="sm"
        title="Menu"
      >
        <Stack>
          {Object.values(MENU).map((route) => (
            <Anchor
              key={route.path}
              href={route.path}
              c="black"
              onClick={close}
            >
              {route.label}
            </Anchor>
          ))}
          <CustomButton mt="md">Book Your Stay</CustomButton>
        </Stack>
      </Drawer>

      <AppShell.Main>
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/banner.png"
            alt="Banner"
            w="100%"
            h="100%"
            fit="cover"
          />

          <Title
            order={1}
            style={{
              position: "absolute",
              top: "50%",
              left: "8%",
              color: "white",
              fontSize: "3rem",
              fontWeight: 700,
              textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            }}
          >
            {getPageTitle()}
          </Title>
        </Box>

        <Container fluid m={0} p={0}>
          {children}
        </Container>
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};
