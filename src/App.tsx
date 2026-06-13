import { RouterProvider } from "react-router-dom";
import { appRouter } from "@/app/routes";
import { ThemeProvider } from "@/components/shared/theme-provider";
import WhatsappButton from "@/components/shared/WhatsappButton";
import CallButton from "./components/shared/CallButton";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={appRouter} />
      <WhatsappButton />
      <CallButton/>
    </ThemeProvider>
  );
}