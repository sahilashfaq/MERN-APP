import { Container, Grid, Divider, Text } from "@mantine/core";
import { FooterBrand } from "./components/FooterBrand";
import { FooterLinks } from "./components/FooterLinks";
import { FooterNewsletter } from "./components/FooterNewsletter";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", padding: "2rem" }}>
      <Container size="xl" fluid>
        {/* Grid layout for footer sections */}
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <FooterBrand />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <FooterLinks />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <FooterNewsletter />
          </Grid.Col>
        </Grid>

        <Divider my="lg" color="dimmed" />

        {/* Bottom section */}
        <Grid justify="space-between" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text size="sm" c="dimmed">
              © Copyright 2025 Fixyland. All Rights Reserved.
            </Text>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 6 }}
            style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
          >
            <Text size="sm" c="dimmed" component="a" href="#">
              Terms and Conditions
            </Text>
            <Text size="sm" c="dimmed" component="a" href="#">
              Privacy Policy
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
};
