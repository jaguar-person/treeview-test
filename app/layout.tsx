"use client";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { inter } from "./fonts";
import { TreeProvider } from "./context/TreeContext";
import "./globals.css";

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
        <MantineProvider>
          <TreeProvider>
            <div className={inter.className}>{children}</div>
          </TreeProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
