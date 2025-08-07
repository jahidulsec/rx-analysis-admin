"use client";

import { DataTable } from "@/components/table/data-table";
import { TableWrapper } from "@/components/table/table";
import { formatDate } from "@/lib/formatters";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { SurveyDetails } from "@/types/survey";
import { Badge } from "@/components/ui/badge";

export default function SurveyMedicineTable({
  medicineList,
}: {
  medicineList: SurveyDetails["medicines"];
}) {
  const columns: ColumnDef<SurveyDetails["medicines"][number]>[] = [
    {
      header: "#",
      cell: ({ row, table }) => {
        const pageIndex = table.getState().pagination.pageIndex;
        const pageSize = table.getState().pagination.pageSize;
        return (
          <span className="text-nowrap">
            {row.index + 1 + pageIndex * pageSize}
          </span>
        );
      },
      size: 20,
    },
    {
      accessorKey: "medicineName",
      header: "Medicine Name",
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      id: "type",
      header: "Type",
      cell: ({ row }) => (
        <Badge
          variant={"outline"}
          className={
            row.original.type === "radiant" ? "text-primary" : "text-secondary"
          }
        >
          {row.original.type}
        </Badge>
      ),
    },
    {
      header: "Created At",
      cell: ({ row }) => {
        const data = row.original;

        return <span>{formatDate(new Date(data.createdAt))}</span>;
      },
    },
  ];

  return (
    <>
      <TableWrapper>
        <DataTable data={medicineList} columns={columns} />
      </TableWrapper>
    </>
  );
}
