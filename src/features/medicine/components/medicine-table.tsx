"use client";

import { PagePagination } from "@/components/pagination/pagination";
import { DataTable } from "@/components/table/data-table";
import { TableWrapper } from "@/components/table/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { DEFAULT_PAGE_SIZE } from "@/lib/data";
import { formatDate } from "@/lib/formatters";
import { MutiResponseType } from "@/types/response";
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import React, { useState, useTransition } from "react";
import { AlertModal } from "@/components/modal/alert";
import { toast } from "sonner";
import { deleteMedicine } from "../actions/medicine";
import MedicineFormModal from "./form-modal";
import { Medicine } from "@/types/medicine";
import { Badge } from "@/components/ui/badge";

export default function MedicineTable({
  response,
}: {
  response: MutiResponseType<Medicine>["data"];
}) {
  const [edit, setEdit] = useState<undefined | Medicine | boolean>(undefined);
  const [del, setDel] = useState<undefined | string | boolean>(undefined);
  const [isPending, startTransition] = useTransition();

  const columns: ColumnDef<Medicine>[] = [
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
      accessorKey: "name",
      header: "Medicine",
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => <Badge variant={"outline"}>{row.original.type}</Badge>,
    },

    {
      header: "Created At",
      cell: ({ row }) => {
        const data = row.original;

        return <span>{formatDate(new Date(data.createdAt))}</span>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                size="icon"
              >
                <EllipsisVertical />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem onClick={() => setEdit(row.original)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                onClick={() => setDel(row.original.id.toString())}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <>
      <TableWrapper>
        <DataTable data={response?.data ?? []} columns={columns} />
      </TableWrapper>

      <PagePagination
        count={response?.data != null ? response.pagination.total_items : 0}
        limit={
          response?.data != null
            ? response.pagination.per_page
            : DEFAULT_PAGE_SIZE
        }
      />

      {/* Edit modal */}
      <MedicineFormModal
        open={!!edit}
        onOpenChange={setEdit}
        title="Edit Territory"
        medicine={typeof edit !== "boolean" ? edit : undefined}
      />

      {/* delete modal */}
      <AlertModal
        pending={isPending}
        open={!!del}
        onOpenChange={setDel}
        onAction={() => {
          startTransition(async () => {
            if (del && typeof del !== "boolean") {
              const response = deleteMedicine(del);
              toast.promise(response, {
                loading: "Loading...",
                success: (data) => {
                  if (!data.data) throw data.error;
                  return data.data?.message;
                },
                error: (data) => {
                  return data.error;
                },
              });
            }
          });
        }}
      />
    </>
  );
}
