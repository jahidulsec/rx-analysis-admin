import { Modal } from "@/components/modal/modal";
import React from "react";
import TerritoryForm from "./territory-form";
import { DialogProps } from "@radix-ui/react-dialog";
import { Territory } from "@/types/territory";

export default function TerritoryFormModal({
  onOpenChange,
  title,
  territory,
  ...props
}: React.ComponentProps<React.FC<DialogProps>> & {
  title: string;
  territory?: Territory;
}) {
  return (
    <Modal title={title} onOpenChange={onOpenChange} {...props}>
      <TerritoryForm
        territory={territory}
        onClose={() => {
          if (onOpenChange) {
            onOpenChange(!open);
          }
        }}
      />
    </Modal>
  );
}
