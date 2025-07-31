"use client";

import React from "react";
import { NavUser } from "../dashboard/nav-user";
import { Logo } from "../logo/logo";
import { Button } from "../ui/button";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navlist } from "@/lib/data";

const user = {
  name: "radiant",
  email: "m@radiant.com",
  avatar: "/images/user.png",
};

export default function AppNavbar() {
  const pathname = usePathname();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 mb-6">
      <div className="container mx-auto px-4 flex justify-between items-center gap-5">
        <Logo />

        <nav>
          <ul className="flex items-center gap-3">
            {navlist.map((item) => (
              <li key={item.title}>
                <Button
                  variant={"outline"}
                  className={cn(
                    "rounded-full shadow-none",
                    pathname === item.url ? "border-primary bg-primary/5" : ""
                  )}
                  asChild
                >
                  <Link href={item.url}>{item.title}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <NavUser user={user} />
      </div>
    </header>
  );
}
