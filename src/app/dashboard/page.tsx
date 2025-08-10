import { ErrorBoundary } from "@/components/boundary/error-boundary";
import CardSkeleton from "@/components/skeleton/card";
import { TableSkeleton } from "@/components/skeleton/table";
import { SectionHeading } from "@/components/typography/heading";
import { Button } from "@/components/ui/button";
import CardSection from "@/features/dashboard/components/card-section";
import HeaderSection from "@/features/dashboard/components/header-section";
import SurveyTable from "@/features/survey/components/survey-table";
import { getSurveys } from "@/features/survey/servers/survey";
import { SearchParams } from "@/types/search-params";
import Link from "next/link";
import { Suspense } from "react";

export default function DashboardPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Suspense>
        <HeaderSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        }
      >
        <CardSection searchParams={searchParams} />
      </Suspense>
      <div className="min-h-[100vh] flex-1 rounded-md md:min-h-[30rem] border p-4">
        <Suspense fallback={<TableSkeleton />}>
          <DataSection />
        </Suspense>
      </div>
    </div>
  );
}

const DataSection = async () => {
  const survey = await getSurveys({ page: 1, size: 20 });
  return (
    <ErrorBoundary error={survey.error}>
      <div className="flex flex-wrap justify-between items-center gap-5">
        <SectionHeading className="mb-6">Recent Survey</SectionHeading>
        <Button variant={"link"} asChild className="text-secondary">
          <Link href={`/dashboard/survey`}>View all</Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <SurveyTable showPagination={false} response={survey.data} />
      </div>
    </ErrorBoundary>
  );
};
