import { Form, FormItem, FormSubmitButton } from "@/components/forms/form";
import { ErrorMessage } from "@/components/text/error-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { toast } from "sonner";
import { addDoctor, updateDoctor } from "../actions/doctor";
import { Doctor } from "@/types/doctor";
import { TerritoryCombobox } from "./territory-combobox";

export default function MedicineForm({
  onClose,
  doctor,
}: {
  onClose: () => void;
  doctor?: Doctor;
}) {
  const [data, action, isPending] = React.useActionState(
    doctor ? updateDoctor.bind(null, doctor.id) : addDoctor,
    null
  );

  React.useEffect(() => {
    if (data?.toast) {
      toast.error(data.toast);
    } else if (data?.success) {
      toast.success(data.success);
      onClose();
    }
  }, [data]);

  return (
    <Form action={action}>
      <FormItem>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          defaultValue={
            (data?.values?.fullName as string) || doctor?.fullName || undefined
          }
          name="fullName"
          id="fullName"
          placeholder="eg. Dr. Abdullah"
        />
        {data?.error && <ErrorMessage message={data.error.fullName} />}
      </FormItem>

      <FormItem>
        <Label htmlFor="designation">Designation</Label>
        <Input
          defaultValue={
            (data?.values?.designation as string) ||
            doctor?.designation ||
            undefined
          }
          name="designation"
          id="designation"
          placeholder="eg. Eye Specialist"
        />
        {data?.error && <ErrorMessage message={data.error.designation} />}
      </FormItem>

      <FormItem>
        <Label htmlFor="mobile">Mobile</Label>
        <Input
          defaultValue={
            (data?.values?.mobile as string) || doctor?.mobile || undefined
          }
          name="mobile"
          id="mobile"
          placeholder="eg. 01XXX XXX XXX"
        />
        {data?.error && <ErrorMessage message={data.error.mobile} />}
      </FormItem>

      <FormItem>
        <Label htmlFor="territoryId">territoryId</Label>
        <TerritoryCombobox
          name="territoryId"
          defaultValue={
            (data?.values?.territoryId as string) ||
            doctor?.territoryId ||
            undefined
          }
        />
        {data?.error && <ErrorMessage message={data.error.territoryId} />}
      </FormItem>
      <FormSubmitButton pending={isPending} />
    </Form>
  );
}
