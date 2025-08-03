import { Modal } from "@/components/modal/modal";
import React from "react";
import UserForm from "./user-form";
import { DialogProps } from "@radix-ui/react-dialog";
import { User } from "@/types/user";

export default function UserFormModal({
  onOpenChange,
  title,
  user,
  ...props
}: React.ComponentProps<React.FC<DialogProps>> & {
  title: string;
  user?: User;
}) {
  return (
    <Modal title={title} onOpenChange={onOpenChange} {...props}>
      <UserForm
        user={user}
        onClose={() => {
          if (onOpenChange) {
            onOpenChange(!open);
          }
        }}
      />
    </Modal>
  );
}
