import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header, Footer } from "../components";

export default function RootLayout() {
  return (
    <div>
      <ScrollRestoration />
      <Header />
      <main className="min-h-[100vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
