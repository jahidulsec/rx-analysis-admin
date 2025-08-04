import { Form, FormItem, FormSubmitButton } from "@/components/forms/form";
import { ErrorMessage } from "@/components/text/error-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { toast } from "sonner";
import { addTerritory, updateTerritory } from "../actions/territory";
import { Territory } from "@/types/territory";

export default function TerritoryForm({
  onClose,
  territory,
}: {
  onClose: () => void;
  territory?: Territory;
}) {
  const [data, action, isPending] = React.useActionState(
    territory
      ? updateTerritory.bind(null, territory.sapTerritoryId)
      : addTerritory,
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
        <Label htmlFor="sapTerritoryId">SAP Territory ID</Label>
        <Input
          defaultValue={
            (data?.values?.sapTerritoryId as string) ||
            territory?.sapTerritoryId ||
            undefined
          }
          name="sapTerritoryId"
          id="sapTerritoryId"
          placeholder="eg. 10001"
        />
        {data?.error && <ErrorMessage message={data.error.sapTerritoryId} />}
      </FormItem>

      <FormItem>
        <Label htmlFor="region">Region</Label>
        <Input
          defaultValue={
            (data?.values?.region as string) || territory?.region || undefined
          }
          name="region"
          id="region"
          placeholder="eg. Dhaka GEN-A-3"
          autoComplete="false"
        />
        {data?.error && <ErrorMessage message={data.error.region} />}
      </FormItem>

      <FormItem>
        <Label htmlFor="zone">Zone</Label>
        <Input
          defaultValue={
            (data?.values?.zone as string) || territory?.zone || undefined
          }
          name="zone"
          id="zone"
          placeholder="eg. Dhaka-I (GEN-A)"
          autoComplete="false"
        />
        {data?.error && <ErrorMessage message={data.error.zone} />}
      </FormItem>

      <FormItem>
        <Label htmlFor="territory">Territory</Label>
        <Input
          defaultValue={
            (data?.values?.territory as string) ||
            territory?.territory ||
            undefined
          }
          name="territory"
          id="territory"
          placeholder="eg. Mugda-1"
          autoComplete="false"
        />
        {data?.error && <ErrorMessage message={data.error.territory} />}
      </FormItem>

      <FormSubmitButton pending={isPending} />
    </Form>
  );
}
