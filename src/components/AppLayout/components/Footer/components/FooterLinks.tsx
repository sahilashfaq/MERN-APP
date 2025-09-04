import { Group, Stack, Text, Anchor } from "@mantine/core";

export const FooterLinks = () => {
  return (
    <Group align="flex-start" gap="5rem">
      {/* Explore */}
      <Stack>
        <Text fw={700} c="white">
          EXPLORE
        </Text>
        <Anchor href="#" c="dimmed" size="sm">
          About Hotel
        </Anchor>
        <Anchor href="#" c="dimmed" size="sm">
          Pricing
        </Anchor>
        <Anchor href="#" c="dimmed" size="sm">
          Hotel Staff
        </Anchor>
        <Anchor href="#" c="dimmed" size="sm">
          Latest News
        </Anchor>
        <Anchor href="#" c="dimmed" size="sm">
          Contact Us
        </Anchor>
      </Stack>

      {/* Contact */}
      <Stack>
        <Text fw={700} c="white">
          CONTACT
        </Text>
        <Text c="dimmed" size="sm">
          7631 Sabina Park, 115 Devon Isle, Louisiana, USA
        </Text>
        <Text c="white" size="sm" fw={500}>
          (+1) 987 654 3210
        </Text>
        <Anchor href="mailto:info@domain.com" c="white" size="sm">
          info@domain.com
        </Anchor>
      </Stack>
    </Group>
  );
};
