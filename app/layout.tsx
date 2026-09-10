import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growth Circle — Private Growth Capital",
  description: "A relationship-led workspace connecting emerging businesses, private capital and strategic expertise.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
