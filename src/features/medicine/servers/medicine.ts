"use server";

import { fetchWithAuth } from "@/lib/api";
import { Medicine } from "@/types/medicine";
import { APIError } from "@/types/errors";
import { MutiResponseType, SingleResponseType } from "@/types/response";

export const getMedicines = async (
  params?: any
): Promise<MutiResponseType<Medicine>> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "").toString();

    const response = await fetchWithAuth(
      `/api/other/v1/medicine?${searchParams}`,
      {
        next: {
          tags: ["medicine"],
        },
      }
    );
    const data = await response.json();

    if (!response.ok) throw data;

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

export const getMedicine = async (
  id: string
): Promise<SingleResponseType<Medicine>> => {
  try {
    const response = await fetchWithAuth(`/api/other/v1/medicine/${id}`, {
      next: {
        tags: ["medicine", id],
      },
    });
    const data = await response.json();

    if (!response.ok) throw data;

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
