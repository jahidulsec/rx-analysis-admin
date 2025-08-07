import { ErrorBoundary } from "@/components/boundary/error-boundary";
import { Field } from "@/components/field/field";
import { Section } from "@/components/section/section";
import { SectionHeading } from "@/components/typography/heading";
import SurveyMedicineTable from "@/features/survey/components/medicine-table";
import { getSurvey } from "@/features/survey/servers/survey";
import { cn } from "@/lib/utils";
import { SingleResponseType } from "@/types/response";
import { params } from "@/types/search-params";
import { SurveyDetails } from "@/types/survey";
import { Book, Pill } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";

export default async function SurveyDetailsPage({
  params,
}: {
  params: params;
}) {
  const { id } = await params;
  const survey = await getSurvey(id as string);

  if (!survey.data) return notFound();

  return (
    <ErrorBoundary error={survey.error}>
      <Section className="flex flex-col gap-6">
        <InformationSection survey={survey.data} />
        <MedicineSection survey={survey.data} />
      </Section>
    </ErrorBoundary>
  );
}

const InformationSection = ({
  survey,
}: {
  survey: SingleResponseType<SurveyDetails>["data"];
}) => {
  return (
    <div>
      <SectionHeading className="mb-4">
        <Book className="size-4 text-primary" />
        Survey Information
      </SectionHeading>
      <div className="border p-4 rounded-md flex flex-wrap gap-8">
        <Field
          name="Surveyor"
          value={`${survey?.data.surveyorName} (${survey?.data.createdBy})`}
        />
        <Field
          name="Doctor"
          value={`${survey?.data.doctorName} (${survey?.data.doctorMobile})`}
        />
        <Field
          name="Territory"
          value={`${survey?.data.territoryName} (${survey?.data.territoryId})`}
        />
      </div>
    </div>
  );
};

const MedicineSection = ({
  survey,
}: {
  survey: SingleResponseType<SurveyDetails>["data"];
}) => {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading>
        <Pill className="size-4 text-primary" />
        Medicines
      </SectionHeading>

      <div className="border p-4 rounded-md ">
        <TableSectionHeading className="text-primary">Radiant</TableSectionHeading>
        <SurveyMedicineTable
          medicineList={
            survey?.data.medicines.filter((item) => item.type === "radiant") ??
            []
          }
        />
      </div>
      <div className="border p-4 rounded-md ">
        <TableSectionHeading>Competitor</TableSectionHeading>
        <SurveyMedicineTable
          medicineList={
            survey?.data.medicines.filter(
              (item) => item.type === "competitor"
            ) ?? []
          }
        />
      </div>
    </div>
  );
};

const TableSectionHeading = ({
  className,
  ...props
}: React.ComponentProps<"h3">) => {
  return (
    <h3
      className={cn(
        "text-secondary font-semibold mb-3 border-b pb-3",
        className
      )}
      {...props}
    />
  );
};
