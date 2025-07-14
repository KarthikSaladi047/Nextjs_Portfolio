import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import StarsCanvas from "./components/StarsCanvas";

export const metadata: Metadata = {
  title: "Karthik Saladi Portfolio",
  description: "Cloud | DevOps | SRE Engineer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className="relative antialiased">
        <MantineProvider defaultColorScheme="dark">
          <StarsCanvas />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
