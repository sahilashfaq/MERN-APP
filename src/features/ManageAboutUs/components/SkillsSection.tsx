import {
  Title,
  Text,
  Container,
  Grid,
  Progress,
  Box,
  Stack,
  Paper,
  Group,
  Image,
} from "@mantine/core";
import { CustomBadge } from "../../../components/Badge";

export default function SkillsSection() {
  const skills = [
    { label: "Services", value: 95 },
    { label: "Chef Master", value: 85 },
    { label: "Design", value: 92 },
    { label: "IT Solution", value: 98 },
  ];

  return (
    <Paper p="xl" my="xl">
      <Container size="xl" py="xl">
        <Grid gutter={{ base: 40, md: 80 }} align="center">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="lg">
              <CustomBadge>OUR SKILLS</CustomBadge>
              <Title order={2} style={{ fontSize: "2.5rem", lineHeight: 1.2 }}>
                Why Choose for us?
              </Title>
              <Text c="dimmed">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
              </Text>
              <Stack gap="xl" mt="md">
                {skills.map((skill, index) => (
                  <Box key={index}>
                    <Group justify="space-between" mb={5}>
                      <Text c="#22906d" fw={500}>
                        {skill.label}
                      </Text>
                      <Text c="#22906d" size="sm">
                        {skill.value}%
                      </Text>
                    </Group>
                    <Progress
                      value={skill.value}
                      color="#22906d"
                      size="lg"
                      radius="sm"
                    />
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Image
              src={"/images/skills.png"}
              w="100%"
              mah={600}
              fit="contain"
              radius="md"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  );
}
