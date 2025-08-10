import { ErrorBoundary } from "@/components/boundary/error-boundary";
import { Card } from "@/components/card/card";
import { getStats } from "@/features/survey/servers/stats";
import { MedicineType } from "@/types/medicine";
import { SearchParams } from "@/types/search-params";
import { Book, Pill } from "lucide-react";

const CardSection = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { date } = await searchParams;

  const response = await getStats(date as string);

  const getPercentage = (type: MedicineType) => {
    if (!response.data) return 0;

    const values = response.data?.data.medicineCount;

    const topValue = values.find((item) => item.type === type)?.quantity ?? 0;
    const total = values.reduce(
      (acc, sum) => Number(acc) + Number(sum.quantity ?? 0),
      0
    );

    if (total === 0) return 0;

    return (topValue / total) * 100;
  };

  return (
    <ErrorBoundary error={response.error}>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card
          item={{ icon: Book, value: response.data?.data.totalSurvey ?? 0 }}
          title="Survey"
        />
        <Card
          item={{
            icon: Pill,
            value: `${getPercentage("radiant")}%`,
          }}
          title="Radiant"
        />
        <Card
          item={{
            icon: Pill,
            value: `${getPercentage("competitor")}%`,
          }}
          title="Competitor"
        />
      </div>
    </ErrorBoundary>
  );
};

export default CardSection;
