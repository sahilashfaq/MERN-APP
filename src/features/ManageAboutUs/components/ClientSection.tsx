import {
  Box,
  Container,
  Center,
  Stack,
  Title,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";
import {
  IconSailboat,
  IconBuildingLighthouse,
  IconBuildingCottage,
  IconBeach,
  IconPlane,
} from "@tabler/icons-react";
import { CustomBadge } from "../../../components/Badge";

const clientIcons = [
  IconSailboat,
  IconBuildingLighthouse,
  IconBuildingCottage,
  IconBeach,
  IconBuildingCottage,
  IconPlane,
];

export default function ClientsSection() {
  const theme = useMantineTheme();
  const iconColor = theme.colors.gray[6];
  const iconSize = 80;

  return (
    <Box bg={"#e9f0ec"} py={{ base: 50, md: 80 }}>
      <Container size="lg">
        <Stack align="center" gap="lg">
          <CustomBadge>OUR CLIENTS</CustomBadge>

          <Title
            order={2}
            ta="center"
            fz={{ base: "2rem", md: "2.5rem" }}
            c={theme.colors.dark[8]}
          >
            We Have More Then 150+ Global Clients
          </Title>

          <SimpleGrid
            cols={{ base: 2, sm: 3, md: 6 }}
            spacing={{ base: "xl", md: "3xl" }}
            verticalSpacing={{ base: "xl", md: "3xl" }}
            mt="xl"
            w="100%"
          >
            {clientIcons.map((Icon, index) => (
              <Center key={index}>
                <Icon color={iconColor} size={iconSize} stroke={1} />
              </Center>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
