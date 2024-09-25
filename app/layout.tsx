"use client";

import { createTheme, DEFAULT_THEME } from "@mantine/core";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { TreeProvider } from "./context/TreeContext";

import "./globals.css";

const theme = createTheme({
  fontFamily: `Inter, ${DEFAULT_THEME.fontFamily}`,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <TreeProvider>{children}</TreeProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
