import { Form, FormItem, FormSubmitButton } from "@/components/forms/form";
import { PasswordInput } from "@/components/inputs/password";
import { Select } from "@/components/select/select";
import { ErrorMessage } from "@/components/text/error-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@/types/user";
import React from "react";
import { toast } from "sonner";
import { addUser, updateUser } from "../actions/territory";

export default function UserForm({
  onClose,
  user,
}: {
  onClose: () => void;
  user?: User;
}) {
  const [data, action, isPending] = React.useActionState(
    user ? updateUser.bind(null, user.id) : addUser,
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

  const userRoles = [
    {
      label: "CHQ Admin",
      value: "chq-admin",
    },
    {
      label: "MIO",
      value: "mio",
    },
  ];

  return (
    <Form action={action}>
      <FormItem>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          defaultValue={
            (data?.values?.fullName as string) || user?.fullName || undefined
          }
          name="fullName"
          id="fullName"
          placeholder="eg. John Doe"
        />
        {data?.error && <ErrorMessage message={data.error.fullName} />}
      </FormItem>

      <FormItem>
        <Label htmlFor="username">Username</Label>
        <Input
          defaultValue={
            (data?.values?.username as string) || user?.username || undefined
          }
          name="username"
          id="username"
          placeholder="eg. johndoe"
          autoComplete="false"
        />
        {data?.error && <ErrorMessage message={data.error.username} />}
      </FormItem>

      <FormItem>
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          defaultValue={(data?.values?.password as string) || undefined}
          name="password"
          id="password"
          placeholder="Password"
        />
        {data?.error && <ErrorMessage message={data.error.password} />}
      </FormItem>

      <FormItem>
        <Label htmlFor="role">role</Label>
        <Select
          data={userRoles}
          defaultValue={
            (data?.values?.role as string) || user?.role || undefined
          }
          name="role"
          id="role"
          placeholder="Select Role"
        />
        {data?.error && <ErrorMessage message={data.error.password} />}
      </FormItem>
      <FormSubmitButton pending={isPending} />
    </Form>
  );
}
