// NotFound.jsx
import { Box, Text, Button, Image, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "5rem",
        textAlign: "center",
        backgroundColor: "#E9F0EC",
        padding: "1rem",
      }}
    >
      <Stack align="center" gap="md">
        <Image
          src={"/images/pageNotFound.png"}
          width={300}
          alt="404 Page Not Found"
        />
        <Text fz="xl" fw={700}>
          Ohh! Page Not Found
        </Text>
        <Text c="dimmed" maw={400}>
          We're sorry but we can't seem to find the page you requested. This
          might be because you have typed the web address incorrectly.
        </Text>
        <Button
          type="submit"
          color="#1f8f6a"
          mt="md"
          radius="sm"
          onClick={() => navigate(ROUTES.ABOUT)}
        >
          About Us
        </Button>
      </Stack>
    </Box>
  );
};
