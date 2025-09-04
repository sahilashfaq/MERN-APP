import { Stack, Text, TextInput, Checkbox, Button, Paper } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";

export const FooterNewsletter = () => {
  return (
    <Paper p={"2rem"} radius="12px" bg="#232323" withBorder={false}>
      <Stack gap="sm">
        <Text fw={700} c="white">
          NEWSLETTER
        </Text>
        <TextInput
          placeholder="Ex. info@domain.com"
          rightSection={<IconSend size={18} />}
          styles={{
            input: { backgroundColor: "transparent", color: "white" },
          }}
        />
        <Checkbox
          label="I agree to all terms and policies"
          color="yellow"
          styles={{
            label: { color: "white" },
          }}
        />
        <Button color="yellow" radius="md">
          Subscribe
        </Button>
      </Stack>
    </Paper>
  );
};
