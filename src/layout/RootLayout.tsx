import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header, Footer, AppSidebar } from "../components";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default function RootLayout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <Header />
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
      <Footer />
    </>
  );
}
