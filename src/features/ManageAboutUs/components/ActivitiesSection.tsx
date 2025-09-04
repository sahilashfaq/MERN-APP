import {
  Title,
  Text,
  Button,
  Container,
  Grid,
  ThemeIcon,
  List,
  Image,
  Stack,
  Paper,
  Group,
} from "@mantine/core";

import {
  IconArrowRight,
  IconBike,
  IconCheck,
  IconSwimming,
} from "@tabler/icons-react";
import { CustomBadge } from "../../../components/Badge";

export default function ActivitiesSection() {
  return (
    <Paper bg={"#E9F0EC"}>
      <Container size="xl" py="xl">
        <Grid gutter={{ base: 40, md: 80 }}>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="lg">
              <CustomBadge> LUXURY HOTEL</CustomBadge>

              <Title order={2} style={{ fontSize: "2.5rem", lineHeight: 1.2 }}>
                We Provide Outdoor Activities To All Visitors
              </Title>
              <Text c="dimmed">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
              </Text>
              <Group>
                <Group>
                  <ThemeIcon variant="light" color="black" size="xl">
                    <IconSwimming style={{ width: "70%", height: "70%" }} />
                  </ThemeIcon>
                  <div>
                    <Text fw={700}>The Best Swimming</Text>
                    <Text fw={700}>Pool</Text>
                  </div>
                </Group>
                <Group>
                  <ThemeIcon variant="light" color="black" size="xl">
                    <IconBike style={{ width: "70%", height: "70%" }} />
                  </ThemeIcon>
                  <div>
                    <Text fw={700}>The Best Stationary</Text>
                    <Text fw={700}>Bike</Text>
                  </div>
                </Group>
              </Group>
              <List
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#22906d" size={24} radius="xl">
                    <IconCheck style={{ width: "70%", height: "70%" }} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  It is a long fact that a reader will be distracted
                </List.Item>
                <List.Item>
                  Lorem Ipsum is simply dummy of the printing
                </List.Item>
                <List.Item>
                  There are many variations of Lorem Ipsum majority
                </List.Item>
              </List>
              <Button
                color="#22906d"
                rightSection={<IconArrowRight size={14} />}
                radius={"sm"}
                mt="md"
                style={{ alignSelf: "flex-start" }}
              >
                Discover More
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Image
              src={"/images/discover.png"}
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
