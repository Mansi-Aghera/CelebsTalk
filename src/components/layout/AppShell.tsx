"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const hideChrome = pathname === "/login" || pathname?.startsWith("/chat");

  return (
    <>
      {!hideChrome ? <Navbar /> : null}
      <main className={hideChrome ? "min-h-screen" : "min-h-screen pt-[72px]"}>{children}</main>
      {!hideChrome ? <Footer /> : null}
    </>
  );
}