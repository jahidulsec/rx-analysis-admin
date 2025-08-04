import { ErrorBoundary } from "@/components/boundary/error-boundary";
import { Section } from "@/components/section/section";
import { TableSkeleton } from "@/components/skeleton/table";
import { getMedicines } from "@/features/medicine/servers/medicine";
import HeaderSection from "@/features/medicine/components/header-section";
import { SearchParams } from "@/types/search-params";
import React, { Suspense } from "react";
import MedicineTable from "@/features/medicine/components/medicine-table";

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
  const response = await getMedicines(params);

  return (
    <ErrorBoundary error={response.error}>
      <MedicineTable response={response.data} />
    </ErrorBoundary>
  );
};
