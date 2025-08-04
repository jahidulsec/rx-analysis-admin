import { Modal } from "@/components/modal/modal";
import React from "react";
import { DialogProps } from "@radix-ui/react-dialog";
import DoctorForm from "./doctor-form";
import { Doctor } from "@/types/doctor";

export default function TerritoryFormModal({
  onOpenChange,
  title,
  doctor,
  ...props
}: React.ComponentProps<React.FC<DialogProps>> & {
  title: string;
  doctor?: Doctor;
}) {
  return (
    <Modal title={title} onOpenChange={onOpenChange} {...props}>
      <DoctorForm
        doctor={doctor}
        onClose={() => {
          if (onOpenChange) {
            onOpenChange(!open);
          }
        }}
      />
    </Modal>
  );
}
