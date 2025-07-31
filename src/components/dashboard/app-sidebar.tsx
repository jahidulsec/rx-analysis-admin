"use client";

import * as React from "react";
import {
  Book,
  Frame,
  LandPlot,
  Loader,
  Map,
  PieChart,
  Pill,
  SquareTerminal,
  Stethoscope,
  Users2,
} from "lucide-react";

import { NavMain } from "@/components/dashboard/nav-main";
import { NavProjects } from "@/components/dashboard/nav-analytics";
import { NavUser } from "@/components/dashboard/nav-user";
import { TeamSwitcher } from "@/components/dashboard/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "radiant",
    email: "m@radiant.com",
    avatar: "/images/user.png",
  },
  teams: [
    {
      name: "Radiant",
      logo: Loader,
      plan: "RX ANALYSIS",
    },
  ],
  navMain: [
    {
      title: "User",
      url: "#",
      icon: Users2,
    },
    {
      title: "Doctor",
      url: "#",
      icon: Stethoscope,
    },
    {
      title: "Medicine",
      url: "#",
      icon: Pill,
    },
    {
      title: "Territory",
      url: "#",
      icon: LandPlot,
    },
  ],
  projects: [
    {
      name: "Survey",
      url: "#",
      icon: Book,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
