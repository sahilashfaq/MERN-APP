import { MantineProvider } from "@mantine/core";
import { Routes } from "../Routes";
import { AppLayout } from "../../components/AppLayout";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Inter, sans-serif",
        primaryColor: "teal",
        defaultRadius: "md",
      }}
    >
      <AppLayout>
        <Notifications />
        <Routes />
      </AppLayout>
    </MantineProvider>
  );
}

export default App;
