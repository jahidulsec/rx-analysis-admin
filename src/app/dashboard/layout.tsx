import AppNavbar from "@/components/nav/app-nav";
import React from "react";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-svh">
      <AppNavbar />
      <main className="bg-background relative flex w-full flex-1 flex-col gap-5 container mx-auto mb-6">
        {children}
      </main>
    </div>
  );
}
