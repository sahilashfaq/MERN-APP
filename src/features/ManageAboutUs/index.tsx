import { Stack } from "@mantine/core";

import ActivitiesSection from "./components/ActivitiesSection";
import StatsSection from "./components/StatsSection";
import SkillsSection from "./components/SkillsSection";
import Staff from "./components/Staff";
import VideoSection from "./components/VideoSection";
import ClientsSection from "./components/ClientSection";

export const AboutUs = () => {
  return (
    <Stack gap="xl">
      <ActivitiesSection />
      <StatsSection />
      <SkillsSection />
      <VideoSection />
      <Staff />
      <ClientsSection />
    </Stack>
  );
};
