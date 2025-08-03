"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogProps } from "@radix-ui/react-dialog";

function Modal({
  onOpenChange,
  title,
  children,
  ...props
}: React.ComponentProps<React.FC<DialogProps>> & {
  title: string;
}) {
  return (
    <Dialog onOpenChange={onOpenChange} {...props}>
      <DialogContent className="p-0">
        <ScrollArea className="max-h-[85vh] p-4">
          <DialogHeader className="mb-6">
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>

          {children}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export { Modal };
