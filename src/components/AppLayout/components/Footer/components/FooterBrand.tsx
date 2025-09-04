import { Group, Text, Stack, ActionIcon, Badge } from "@mantine/core";
import { socialIcons } from "../../../../../constants/social";

export const FooterBrand = () => {
  return (
    <Stack gap="sm" maw={300}>
      <Group>
        <Text fw={700} fz="xl" c="white">
          Fixyland
        </Text>
      </Group>
      <Text c="dimmed" size="sm">
        Nam libero tempore cum soluta nobis eseligendi optio cumque nihil
        impedit quo minus maxime placeat facere
      </Text>
      <Group>
        {socialIcons.map((Icon, idx) => (
          <Badge key={idx} radius="sm" size="xl" bg="#272727" p={0}>
            <ActionIcon size="lg" variant="subtle" color="white">
              <Icon size={20} color="white" />
            </ActionIcon>
          </Badge>
        ))}
      </Group>
    </Stack>
  );
};
