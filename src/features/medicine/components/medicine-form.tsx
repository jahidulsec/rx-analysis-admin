import { Form, FormItem, FormSubmitButton } from "@/components/forms/form";
import { ErrorMessage } from "@/components/text/error-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { toast } from "sonner";
import { addMedicine, updateMedicine } from "../actions/medicine";
import { Medicine } from "@/types/medicine";
import { Select } from "@/components/select/select";

export default function MedicineForm({
  onClose,
  medicine,
}: {
  onClose: () => void;
  medicine?: Medicine;
}) {
  const [data, action, isPending] = React.useActionState(
    medicine ? updateMedicine.bind(null, medicine.id) : addMedicine,
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

  const medicineType = [
    {
      label: "Radiant",
      value: "radiant",
    },
    {
      label: "Competitor",
      value: "competitor",
    },
  ];

  return (
    <Form action={action}>
      <FormItem>
        <Label htmlFor="name">Medicine Name</Label>
        <Input
          defaultValue={
            (data?.values?.name as string) || medicine?.name || undefined
          }
          name="name"
          id="name"
          placeholder="eg. 10001"
        />
        {data?.error && <ErrorMessage message={data.error.name} />}
      </FormItem>

      <FormItem>
        <Label htmlFor="type">Type</Label>
        <Select
          data={medicineType}
          defaultValue={
            (data?.values?.type as string) || medicine?.type || undefined
          }
          name="type"
          id="type"
          placeholder="Select type"
        />
        {data?.error && <ErrorMessage message={data.error.password} />}
      </FormItem>

      <FormSubmitButton pending={isPending} />
    </Form>
  );
}
