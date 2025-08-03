"use client";

import { SearchForm } from "@/components/inputs/search";
import {
  ActionSection,
  HeaderSection as Header,
} from "@/components/section/section";
import { SectionHeading } from "@/components/typography/heading";
import { Button } from "@/components/ui/button";
import { navlist } from "@/lib/data";
import { Plus } from "lucide-react";
import React, { Suspense } from "react";
import UserFormModal from "./form-modal";

export default function HeaderSection() {
  const data = navlist.find((item) => item.title === "User");

  const [add, setAdd] = React.useState(false);

  return (
    <>
      <Header>
        <SectionHeading icon={data && <data.icon />}>User</SectionHeading>

        <ActionSection>
          <Suspense>
            <SearchForm />
          </Suspense>
          <Button
            variant={"outline"}
            className="border border-gradient"
            onClick={() => setAdd(true)}
          >
            <Plus className="text-primary" /> Add user
          </Button>
        </ActionSection>
      </Header>

      {/* modal */}
      <UserFormModal title="Add User" open={add} onOpenChange={setAdd} />
    </>
  );
}
