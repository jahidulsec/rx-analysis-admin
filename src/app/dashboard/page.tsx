import { ErrorBoundary } from "@/components/boundary/error-boundary";
import { Card } from "@/components/card/card";
import { SectionHeading } from "@/components/typography/heading";
import { Button } from "@/components/ui/button";
import SurveyTable from "@/features/survey/components/survey-table";
import { getSurveys } from "@/features/survey/servers/survey";
import { Book } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <CardSection />
      <div className="min-h-[100vh] flex-1 rounded-md md:min-h-[30rem] border p-4">
        <DataSection />
      </div>
    </div>
  );
}

const CardSection = () => {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <Card item={{ icon: Book, value: 123 }} title="Survey" />
      <Card item={{ icon: Book, value: 123 }} title="Survey" />
      <Card item={{ icon: Book, value: 123 }} title="Survey" />
    </div>
  );
};

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
