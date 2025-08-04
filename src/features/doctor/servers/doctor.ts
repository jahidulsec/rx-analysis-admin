"use server";

import { fetchWithAuth } from "@/lib/api";
import { Doctor } from "@/types/doctor";
import { APIError } from "@/types/errors";
import { MutiResponseType, SingleResponseType } from "@/types/response";

export const getDoctors = async (
  params?: any
): Promise<MutiResponseType<Doctor>> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "").toString();

    const response = await fetchWithAuth(
      `/api/user/v1/doctor?${searchParams}`,
      {
        next: {
          tags: ["doctor"],
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

export const getDoctor = async (
  id: string
): Promise<SingleResponseType<Doctor>> => {
  try {
    const response = await fetchWithAuth(`/api/user/v1/doctor/${id}`, {
      next: {
        tags: ["doctor", id],
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
