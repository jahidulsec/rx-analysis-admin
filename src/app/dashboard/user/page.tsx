import { SearchForm } from "@/components/inputs/search";
import { Section } from "@/components/section/section";
import { SectionHeading } from "@/components/typography/heading";
import { Button } from "@/components/ui/button";
import UserTable from "@/features/user/components/user-table";
import { navlist, users } from "@/lib/data";
import { Plus } from "lucide-react";
import React, { Suspense } from "react";

const roles = ["admin", "mio"];

export default function UserPage() {
  const data = navlist[1];

  return (
    <Section>
      <div className="border rounded-md p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center gap-5 flex-wrap">
          <SectionHeading>
            <data.icon /> User
          </SectionHeading>

          <div className="flex items-center gap-3">
            <Suspense>
              <SearchForm />
            </Suspense>
            <Button variant={"outline"} className="border border-gradient">
              <Plus className="text-primary" /> Add user
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {roles.map((item) => (
            <Button variant={"outline"} className="rounded-full" key={item}>
              {item}
            </Button>
          ))}
        </div>

        <UserTable
          response={{
            success: true,
            message: "",
            data: users,
            pagination: {
              total_items: 20,
              total_page: 1,
              current_page: 1,
              per_page: 20,
            },
          }}
        />
      </div>
    </Section>
  );
}
