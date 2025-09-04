import {
  Box,
  Container,
  Center,
  Stack,
  Title,
  ActionIcon,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { CustomBadge } from "../../../components/Badge";

export default function VideoSection() {
  const [opened, { open, close }] = useDisclosure(false);
  const videoUrl = "https://www.youtube.com/embed/ScMzIvxBSi4";

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="100%"
        centered
        withCloseButton={false}
        padding={0}
      >
        <iframe
          style={{
            width: "100%",
            height: "500px",
            border: 0,
            display: "block",
          }}
          src={`${videoUrl}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Modal>

      <Box bg="#22906D" c="white" py={{ base: 60, md: 100 }}>
        <Container size="md">
          <Center>
            <Stack align="center" gap="xl">
              <CustomBadge> AMAZING EXPERIENCE</CustomBadge>
              <Title order={2} ta="center" size={40}>
                Relax And Enjoy With Our <br /> Hotel & Resort
              </Title>
              <ActionIcon
                variant="filled"
                color="white"
                c="black"
                radius="xl"
                size={60}
                onClick={open}
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
                styles={{
                  root: {
                    "&:hover": {
                      backgroundColor: "white !important",
                      color: "black !important",
                    },
                  },
                }}
              >
                <IconPlayerPlayFilled style={{ width: 20, height: 20 }} />
              </ActionIcon>
            </Stack>
          </Center>
        </Container>
      </Box>
    </>
  );
}
