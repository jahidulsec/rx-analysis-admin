import { AppSidebar } from "@/components/app-sidebar";
import AppNavbar from "@/components/nav/app-nav";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppNavbar /> {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
