import AppNavbar from "@/components/nav/app-nav";
import { getAuthUser } from "@/lib/dal";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({
  children,
}: React.PropsWithChildren) {
  const authUser = await getAuthUser();

  if (!authUser) redirect("/login");

  return (
    <div className="min-h-svh">
      <AppNavbar user={authUser} />
      <main className="bg-background relative flex w-full flex-1 flex-col gap-5 container mx-auto mb-6">
        {children}
      </main>
    </div>
  );
}
