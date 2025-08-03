"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormItem, FormSubmitButton } from "@/components/forms/form";
import { PasswordInput } from "@/components/inputs/password";
import React from "react";
import { useRouter } from "@bprogress/next";
import { toast } from "sonner";
import { login } from "../actions/login";
import { ErrorMessage } from "@/components/text/error-message";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [data, action, isPending] = React.useActionState(login, null);
  const router = useRouter();

  React.useEffect(() => {
    if (data?.toast) {
      toast.error(data.toast);
    } else if (data?.sucess) {
      toast.success(data?.sucess);
      router.push("/dashboard");
    }

    console.log(data);
  }, [data]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login with your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form action={action}>
            <FormItem>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="Username"
                required
              />
              {data?.error && <ErrorMessage message={data.error.username} />}
            </FormItem>
            <FormItem>
              <Label htmlFor="password">Password</Label>
              <PasswordInput name="password" placeholder="Password" />
              {data?.error && <ErrorMessage message={data.error.password} />}
            </FormItem>
            <FormSubmitButton pending={isPending}>Login</FormSubmitButton>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
