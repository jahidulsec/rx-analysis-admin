import {
  Book,
  LandPlot,
  LayoutDashboard,
  Pill,
  Stethoscope,
  Users2,
} from "lucide-react";

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 20;

export const navlist = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "User",
    url: "/dashboard/user",
    icon: Users2,
  },
  {
    title: "Doctor",
    url: "/dashboard/doctor",
    icon: Stethoscope,
  },
  {
    title: "Medicine",
    url: "/dashboard/medicine",
    icon: Pill,
  },
  {
    title: "Territory",
    url: "/dashboard/territory",
    icon: LandPlot,
  },
  {
    title: "Survey",
    url: "/dashboard/survey",
    icon: Book,
  },
];
