import {
  Box,
  Container,
  Stack,
  Title,
  Grid,
  Card,
  Image,
  Text,
  Group,
  Button,
  Loader,
  Center,
} from "@mantine/core";
import {
  IconBath,
  IconBed,
  IconUsers,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { CustomBadge } from "../../../components/Badge";
import { useBookingData } from "../hooks/useData";

function RoomCard({ room }: any) {
  return (
    <Card shadow="sm" padding="lg" radius="lg" h="100%">
      <Card.Section style={{ position: "relative" }}>
        <Image
          src={room.image || "/images/room.png"}
          height={250}
          alt={room.name}
        />
        <CustomBadge
          color="white"
          bg={"#1f8f6a"}
          style={{ position: "absolute", top: 15, left: 15, border: "none" }}
        >
          {" "}
          ${room.price} / Night
        </CustomBadge>
      </Card.Section>

      <Stack mt="md" justify="space-between" style={{ flex: 1 }}>
        <div>
          <Title order={3} fw={700}>
            {room.name}
          </Title>

          <Group gap="md" mt="md">
            <Group gap={4}>
              <IconUsers size={25} stroke={1.5} color={"#1f8f6a"} />
              <Text size="sm" c="dimmed">
                {room.guests} Guests
              </Text>
            </Group>
            <Group gap={4}>
              <IconBed size={25} stroke={1.5} color={"#1f8f6a"} />
              <Text size="sm" c="dimmed">
                {room.beds} Beds
              </Text>
            </Group>
            <Group gap={4}>
              <IconBath size={25} stroke={1.5} color={"#1f8f6a"} />
              <Text size="sm" c="dimmed">
                {room.baths} Bath
              </Text>
            </Group>
          </Group>

          <Text size="sm" c="dimmed" mt="md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </Text>
        </div>

        <Button
          color="#1f8f6a"
          mt="md"
          radius="sm"
          rightSection={<IconArrowUpRight size={16} />}
          style={{ width: "fit-content", alignSelf: "flex-start" }}
        >
          Read More
        </Button>
      </Stack>
    </Card>
  );
}

export default function RoomsSection() {
  const { isLoading, showDummy, roomList } = useBookingData();

  return (
    <Box bg={"#1f8f6a"} py={{ base: 50, md: 80 }}>
      <Container size="lg">
        <Stack align="center" gap="xs">
          <CustomBadge>OUR BEST ROOMS</CustomBadge>

          <Title
            order={2}
            ta="center"
            c={"white"}
            fz={{ base: "2rem", md: "2.8rem" }}
          >
            Luxury Rooms and Resort
          </Title>
        </Stack>

        {isLoading && !showDummy ? (
          <Center mt="xl">
            <Loader color="white" size="lg" />
          </Center>
        ) : (
          <Grid mt={{ base: "xl", md: 50 }}>
            {roomList.map((room: any, index: number) => (
              <Grid.Col
                key={room._id || index}
                span={{ base: 12, sm: 6, lg: 4 }}
              >
                <RoomCard room={room} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
