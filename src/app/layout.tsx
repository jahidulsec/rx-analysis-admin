import type { Metadata } from "next";
import "./globals.css";
import ProgressProviders from "@/providers/progress-provider";
import { Toaster } from "@/components/ui/sonner";

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
      <body className={`font-inter antialiased`}>
        <ProgressProviders>
          {children} <Toaster position="top-right" />
        </ProgressProviders>
      </body>
    </html>
  );
}
