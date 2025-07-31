import { ErrorBoundary } from "@/components/boundary/error-boundary";
import { Section } from "@/components/section/section";
import { TableSkeleton } from "@/components/skeleton/table";
import { Button } from "@/components/ui/button";
import HeaderSection from "@/features/user/components/header-section";
import UserTable from "@/features/user/components/user-table";
import { getUsers } from "@/features/user/servers/user";
import { SearchParams } from "@/types/search-params";
import React, { Suspense } from "react";

const roles = ["admin", "mio"];

export default async function UserPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <Section>
      <div className="border rounded-md p-4 flex flex-col gap-4">
        <HeaderSection />

        <div className="flex items-center gap-3">
          {roles.map((item) => (
            <Button variant={"outline"} className="rounded-full" key={item}>
              {item}
            </Button>
          ))}
        </div>

        <Suspense fallback={<TableSkeleton />}>
          <TableSection searchParams={searchParams} />
        </Suspense>
      </div>
    </Section>
  );
}

const TableSection = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const params = await searchParams;
  const response = await getUsers(params);

  return (
    <ErrorBoundary error={response.error}>
      <UserTable response={response.data} />
    </ErrorBoundary>
  );
};
