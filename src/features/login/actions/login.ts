"use server";

import { env } from "@/data/env/client";
import { createSession, deleteSession } from "@/lib/session";
import { APIError } from "@/types/errors";
import { revalidateTag } from "next/cache";

export const login = async (prevState: unknown, formData: FormData) => {
  try {
    // modify form data
    const modifiedFrmData = Object.fromEntries(formData.entries());

    // fetch api
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/api/auth/v1/login`,
      {
        method: "POST",
        body: JSON.stringify(modifiedFrmData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    // if not ok, throw error
    if (!response.ok) {
      throw data as APIError;
    }

    // get user info
    const user = {
      id: data.data.id,
      username: data.data.username,
      fullName: data.data.fullName,
      role: data.data.role,
    };

    // create cookie session
    await createSession(data?.data?.refreshToken as string, user);

    revalidateTag("admin");

    return {
      sucess: data.message,
      error: null,
      toast: null,
    };
  } catch (error) {
    const err = error as APIError;

    if (err.errors) {
      let modifiedError: any = {};

      for (const key in err.errors) {
        modifiedError = {
          ...modifiedError,
          [err.errors[key].field]: [err.errors[key].message],
        };
      }
      return { error: modifiedError };
    }
    return { toast: err.message };
  }
};

export const logout = async () => {
  try {
    await deleteSession();
    return {
      success: "Your are successfully logged out",
      error: null,
    };
  } catch (error) {
    return {
      success: "Your are successfully logged out",
      error: (error as any).message,
    };
  }
};
