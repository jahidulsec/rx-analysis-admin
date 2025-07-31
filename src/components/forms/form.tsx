import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

const Form = ({ className, ...props }: React.ComponentProps<"form">) => {
  return <form className={cn("flex flex-col gap-6 ", className)} {...props} />;
};

const FormItem = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("flex flex-col gap-3 ", className)} {...props} />;
};

const FormSubmitButton = ({
  className,
  pending = false,
}: React.ComponentProps<"button"> & { pending?: boolean }) => {
  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("font-semibold", className)}
    >
      {pending && (
        <Spinner
          borderBottomColor="border-b-background"
          className="mr-2 size-4"
        />
      )}
      {pending ? `Submitting...` : `Submit`}
    </Button>
  );
};

export { Form, FormSubmitButton, FormItem };
