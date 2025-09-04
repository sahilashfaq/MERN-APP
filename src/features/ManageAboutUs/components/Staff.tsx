import {
  Card,
  Image,
  Text,
  ActionIcon,
  Container,
  Title,
  Grid,
  Box,
  Center,
  Stack,
  Group,
  Loader,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { CustomBadge } from "../../../components/Badge";
import { StaffService } from "../../../services/StaffService";
import { useQuery } from "@tanstack/react-query";
import { staffData } from "../../../constants/dummyData";
import { useEffect, useState } from "react";

function StaffCard({ member }: { member: any }) {
  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder>
      <Card.Section style={{ position: "relative" }}>
        <Image
          src={member?.imageUrl || "/images/room.png"}
          mah={400}
          height={350}
          alt={member?.name}
        />
        <ActionIcon
          variant="filled"
          color="#1E8F6B"
          radius="sm"
          size="lg"
          style={{ position: "absolute", bottom: 10, right: 10 }}
        >
          <IconPlus size={20} />
        </ActionIcon>
      </Card.Section>

      <Stack mt="md" mb="xs" gap={0}>
        <Text fw={700} size="xl">
          {member.name}
        </Text>
        <Group>
          <Box w={40} h={3} bg="#1E8F6B" my={4} />
          <Text size="sm" c="dimmed">
            {member.role}
          </Text>
        </Group>
      </Stack>
    </Card>
  );
}

export default function Staff() {
  const {
    data: staff,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["staff"],
    retry: 1, // only retry once
    queryFn: () => StaffService.getAll(),
  });

  const [showDummy, setShowDummy] = useState(false);

  // After 10s of error/loading, fallback to dummy data
  useEffect(() => {
    if (isError || isLoading) {
      const timer = setTimeout(() => {
        setShowDummy(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isError, isLoading]);

  const staffList =
    !showDummy && Array.isArray(staff?.data) && staff.data.length > 0
      ? staff.data
      : staffData;

  return (
    <Container size="lg" py="xl">
      <Center>
        <Stack align="center" gap="xs">
          <CustomBadge> FIXYLAND STAFF</CustomBadge>
          <Title fw={1000}>Expert Staff Persons</Title>
        </Stack>
      </Center>

      {isLoading && !showDummy ? (
        <Center mt="xl">
          <Loader color="teal" size="lg" />
        </Center>
      ) : (
        <Grid mt="xl">
          {staffList.map((member: any, index: number) => (
            <Grid.Col
              span={{ base: 12, xs: 6, md: 3 }}
              key={member._id || index}
            >
              <StaffCard member={member} />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Container>
  );
}
