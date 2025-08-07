"use client";

import { SearchForm } from "@/components/inputs/search";
import {
  ActionSection,
  HeaderSection as Header,
} from "@/components/section/section";
import { SectionHeading } from "@/components/typography/heading";
import { navlist } from "@/lib/data";
import React, { Suspense } from "react";

export default function HeaderSection() {
  const title = "Survey";

  const data = navlist.find((item) => item.title === title);

  return (
    <>
      <Header>
        <SectionHeading icon={data && <data.icon />}>{title}</SectionHeading>

        <ActionSection>
          <Suspense>
            <SearchForm />
          </Suspense>
        </ActionSection>
      </Header>
    </>
  );
}
