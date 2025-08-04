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
import DoctorFormModal from "./form-modal";

export default function HeaderSection() {
  const title = "Doctor";

  const data = navlist.find((item) => item.title === title);

  const [add, setAdd] = React.useState(false);

  return (
    <>
      <Header>
        <SectionHeading icon={data && <data.icon />}>{title}</SectionHeading>

        <ActionSection>
          <Suspense>
            <SearchForm />
          </Suspense>
          <Button
            variant={"outline"}
            className="border border-gradient"
            onClick={() => setAdd(true)}
          >
            <Plus className="text-primary" /> Add {title}
          </Button>
        </ActionSection>
      </Header>

      {/* modal */}
      <DoctorFormModal title={`Add ${title}`} open={add} onOpenChange={setAdd} />
    </>
  );
}
