"use client";

import React from "react";
import { NavUser } from "../dashboard/nav-user";
import { Logo } from "../logo/logo";
import { Button } from "../ui/button";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navlist } from "@/lib/data";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { AuthUser } from "@/types/auth-user";

const user = {
  name: "radiant",
  email: "m@radiant.com",
  avatar: "/images/user.png",
};

export default function AppNavbar({ user }: { user: AuthUser }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 mb-6">
      <div className="container mx-auto px-4 flex justify-between items-center gap-5">
        <div className="flex items-center gap-3">
          <Button
            className="lg:hidden"
            size={"icon"}
            variant={"ghost"}
            onClick={() => setOpen(true)}
          >
            <Menu /> <span className="sr-only">Menu</span>
          </Button>
          <Logo />
        </div>

        {/* desktop view */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {navlist.map((item) => (
              <li key={item.title}>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className={cn(
                    "rounded-full shadow-none text-xs font-medium",
                    pathname === item.url
                      ? "border-primary bg-primary/5 font-semibold"
                      : ""
                  )}
                  asChild
                >
                  <Link href={item.url}>
                    <item.icon
                      className={`transition-all duration-300 fill-primary/40 text-primary/90 ${
                        pathname === item.url ? "max-w-10" : "max-w-0"
                      }`}
                    />{" "}
                    {item.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <NavUser user={user} />
      </div>

      {/* toggable sidebar (mobile) */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <div className="flex justify-center items-center">
              <Logo />
            </div>
            <SheetTitle className="sr-only">Nav Menu</SheetTitle>
          </SheetHeader>

          <nav className="px-6">
            <ul className="flex flex-col gap-3">
              {navlist.map((item) => (
                <li key={item.title}>
                  <Button
                    variant={"ghost"}
                    className={cn(
                      "rounded-full shadow-none w-full justify-start",
                      pathname === item.url ? "border-primary bg-primary/5" : ""
                    )}
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon /> {item.title}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
