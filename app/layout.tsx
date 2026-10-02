import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bordet App",
  description: "Restaurant bucket list and rating app for groups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
