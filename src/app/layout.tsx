import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What A Simple Dash",
  description: "A self-hosted dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
