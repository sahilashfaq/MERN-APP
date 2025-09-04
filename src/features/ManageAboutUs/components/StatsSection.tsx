import { Title, Text, Container, Grid, Box } from "@mantine/core";

export default function StatsSection() {
  const stats = [
    { value: "305+", label: "Luxury Rooms" },
    { value: "650+", label: "Regular Guests" },
    { value: "80+", label: "Team Member" },
    { value: "75+", label: "Beaches" },
  ];

  return (
    <Box bg="#22906d" c="white" py={60}>
      <Container size="xl">
        <Grid>
          {stats.map((stat, index) => (
            <Grid.Col
              span={{ base: 6, sm: 3 }}
              key={index}
              style={{ textAlign: "center" }}
            >
              <Title
                order={1}
                style={{
                  fontSize: "3rem",
                  WebkitTextStroke: "1px white",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </Title>

              <Text size="lg">{stat.label}</Text>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
