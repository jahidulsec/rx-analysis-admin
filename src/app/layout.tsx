import type { Metadata } from "next";
import "./globals.css";
import ProgressProviders from "@/providers/progress-provider";


export const metadata: Metadata = {
  title: "Dashboard - Radiant RX Analysis",
  description: "A modern admin panel for data analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-inter antialiased`}
      >
        <ProgressProviders>{children}</ProgressProviders>
      </body>
    </html>
  );
}
