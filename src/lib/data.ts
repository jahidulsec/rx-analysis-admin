import {
  Book,
  LandPlot,
  LayoutDashboard,
  Pill,
  Stethoscope,
  Users2,
} from "lucide-react";

export const users = [
  {
    id: 1,
    fullName: "Jahidul Islam",
    username: "jahidul",
    role: "admin",
    createdAt: "2025-07-01T08:00:00Z",
  },
  {
    id: 2,
    fullName: "Ayesha Siddiqua",
    username: "ayesha",
    role: "editor",
    createdAt: "2025-07-02T09:15:00Z",
  },
  {
    id: 3,
    fullName: "Tanvir Hasan",
    username: "tanvir",
    role: "user",
    createdAt: "2025-07-03T14:30:00Z",
  },
  {
    id: 4,
    fullName: "Mahmudul Kabir",
    username: "kabir",
    role: "moderator",
    createdAt: "2025-07-04T10:45:00Z",
  },
  {
    id: 5,
    fullName: "Nusrat Jahan",
    username: "nusrat",
    role: "admin",
    createdAt: "2025-07-05T12:00:00Z",
  },
  {
    id: 6,
    fullName: "Rakib Hossain",
    username: "rakib",
    role: "user",
    createdAt: "2025-07-06T11:20:00Z",
  },
  {
    id: 7,
    fullName: "Shamima Akter",
    username: "shamima",
    role: "editor",
    createdAt: "2025-07-07T13:45:00Z",
  },
  {
    id: 8,
    fullName: "Abdul Karim",
    username: "karim",
    role: "moderator",
    createdAt: "2025-07-08T15:00:00Z",
  },
  {
    id: 9,
    fullName: "Farhana Lima",
    username: "farhana",
    role: "user",
    createdAt: "2025-07-09T08:30:00Z",
  },
  {
    id: 10,
    fullName: "Nazmul Haque",
    username: "nazmul",
    role: "admin",
    createdAt: "2025-07-10T10:10:00Z",
  },
  {
    id: 11,
    fullName: "Sadia Rahman",
    username: "sadia",
    role: "editor",
    createdAt: "2025-07-11T16:45:00Z",
  },
  {
    id: 12,
    fullName: "Mizanur Rahman",
    username: "mizan",
    role: "user",
    createdAt: "2025-07-12T09:00:00Z",
  },
  {
    id: 13,
    fullName: "Kawsar Ahmed",
    username: "kawsar",
    role: "moderator",
    createdAt: "2025-07-13T14:25:00Z",
  },
  {
    id: 14,
    fullName: "Rumana Sultana",
    username: "rumana",
    role: "user",
    createdAt: "2025-07-14T12:40:00Z",
  },
  {
    id: 15,
    fullName: "Arif Mahmud",
    username: "arif",
    role: "admin",
    createdAt: "2025-07-15T11:55:00Z",
  },
  {
    id: 16,
    fullName: "Tania Akter",
    username: "tania",
    role: "user",
    createdAt: "2025-07-16T13:10:00Z",
  },
  {
    id: 17,
    fullName: "Saiful Islam",
    username: "saiful",
    role: "editor",
    createdAt: "2025-07-17T10:05:00Z",
  },
  {
    id: 18,
    fullName: "Mehedi Hasan",
    username: "mehedi",
    role: "moderator",
    createdAt: "2025-07-18T15:30:00Z",
  },
  {
    id: 19,
    fullName: "Faria Nabila",
    username: "faria",
    role: "user",
    createdAt: "2025-07-19T09:35:00Z",
  },
  {
    id: 20,
    fullName: "Hasan Mahmud",
    username: "hasan",
    role: "admin",
    createdAt: "2025-07-20T12:25:00Z",
  },
];

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
