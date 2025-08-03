import { ErrorBoundary } from "@/components/boundary/error-boundary";
import { Section } from "@/components/section/section";
import { TableSkeleton } from "@/components/skeleton/table";
import { getTerritories } from "@/features/territory/servers/user";
import HeaderSection from "@/features/territory/components/header-section";
import { SearchParams } from "@/types/search-params";
import React, { Suspense } from "react";
import TerritoryTable from "@/features/territory/components/territory-table";

export default async function UserPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <Section>
      <div className="border rounded-md p-4 flex flex-col gap-4">
        <HeaderSection />

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
  const response = await getTerritories(params);

  return (
    <ErrorBoundary error={response.error}>
      <TerritoryTable response={response.data} />
    </ErrorBoundary>
  );
};
