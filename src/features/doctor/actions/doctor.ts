"use server";

import { fetchWithAuth } from "@/lib/api";
import { APIError } from "@/types/errors";
import { Doctor } from "@/types/doctor";
import { SingleResponseType } from "@/types/response";
import { revalidateTag } from "next/cache";

export const addDoctor = async (prevState: unknown, formData: FormData) => {
  const modifiedFormData = Object.fromEntries(formData.entries());

  console.log(modifiedFormData)

  try {
    // fetch api
    const response = await fetchWithAuth(`/api/user/v1/doctor`, {
      method: "POST",
      body: JSON.stringify(modifiedFormData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // if not ok, throw error
    if (!response.ok) {
      throw data as APIError;
    }

    revalidateTag("doctor");

    return {
      success: data.message,
      error: null,
      toast: null,
    };
  } catch (error) {
    const err = error as APIError;

    console.error(error);

    if (err.errors) {
      let modifiedError: any = {};

      for (const key in err.errors) {
        modifiedError = {
          ...modifiedError,
          [err.errors[key].field]: [err.errors[key].message],
        };
      }
      return { error: modifiedError, values: modifiedFormData };
    }
    return { toast: err.message, values: modifiedFormData };
  }
};

export const updateDoctor = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  // modify form data
  const modifiedFormData = Object.fromEntries(formData.entries());
  try {
    // Create a cleaned version
    const cleanedFormData: any = {};

    for (const key in modifiedFormData) {
      const value = modifiedFormData[key];
      if (
        modifiedFormData[key] !== null &&
        modifiedFormData[key] !== undefined &&
        modifiedFormData[key] !== "null" &&
        modifiedFormData[key] !== "" &&
        modifiedFormData[key] !== "undefined"
      ) {
        cleanedFormData[key] = value;
      }
    }

    // fetch api
    const response = await fetchWithAuth(`/api/user/v1/doctor/${id}`, {
      method: "PATCH",
      body: JSON.stringify(cleanedFormData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // if not ok, throw error
    if (!response.ok) {
      throw data as APIError;
    }

    revalidateTag("doctor");

    return {
      success: data.message,
      error: null,
      toast: null,
    };
  } catch (error) {
    const err = error as APIError;

    console.error(error);

    if (err.errors) {
      let modifiedError: any = {};

      for (const key in err.errors) {
        modifiedError = {
          ...modifiedError,
          [err.errors[key].field]: [err.errors[key].message],
        };
      }
      return { error: modifiedError, values: modifiedFormData };
    }
    return { toast: err.message, values: modifiedFormData };
  }
};

export const deleteDoctor = async (
  id: string
): Promise<SingleResponseType<Doctor>> => {
  try {
    const response = await fetchWithAuth(`/api/user/v1/doctor/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (!response.ok) throw data;

    revalidateTag("doctor");

    return {
      data: data,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: error as APIError,
    };
  }
};
