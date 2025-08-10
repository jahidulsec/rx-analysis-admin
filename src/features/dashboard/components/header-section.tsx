"use client";

import { Select } from "@/components/select/select";
import { format } from "date-fns";
import React from "react";

export default function HeaderSection() {
  const now = new Date();
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  const data = [
    {
      label: "This month",
      value: format(now, "yyyy-MM-dd"),
    },
    {
      label: "Last Month",
      value: format(lastMonth, "yyyy-MM-dd"),
    },
  ];

  return (
    <div className="flex justify-end items-center">
      <Select defaultValue={format(now, "yyyy-MM-dd")} data={data} paramsName="date" />
    </div>
  );
}
