import { Modal } from "@/components/modal/modal";
import React from "react";
import { DialogProps } from "@radix-ui/react-dialog";
import MedicineForm from "./medicine-form";
import { Medicine } from "@/types/medicine";

export default function TerritoryFormModal({
  onOpenChange,
  title,
  medicine,
  ...props
}: React.ComponentProps<React.FC<DialogProps>> & {
  title: string;
  medicine?: Medicine;
}) {
  return (
    <Modal title={title} onOpenChange={onOpenChange} {...props}>
      <MedicineForm
        medicine={medicine}
        onClose={() => {
          if (onOpenChange) {
            onOpenChange(!open);
          }
        }}
      />
    </Modal>
  );
}
