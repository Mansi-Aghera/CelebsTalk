import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";

import AppShell from "@/components/layout/AppShell";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CelebsTalk - Connect With Celebrities Like Never Before",
  description:
    "Book video calls, personalized shoutouts, and live chats with your favorite stars.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${poppins.variable} font-sans antialiased`}
      >
       <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}