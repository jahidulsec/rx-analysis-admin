"use server";

import { fetchWithAuth } from "@/lib/api";
import { Territory } from "@/types/territory";
import { APIError } from "@/types/errors";
import { MutiResponseType, SingleResponseType } from "@/types/response";

export const getTerritories = async (
  params?: any
): Promise<MutiResponseType<Territory>> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "").toString();

    const response = await fetchWithAuth(
      `/api/other/v1/territory?${searchParams}`,
      {
        next: {
          tags: ["territory"],
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

export const getTerritory = async (
  id: string
): Promise<SingleResponseType<Territory>> => {
  try {
    const response = await fetchWithAuth(`/api/other/v1/territory/${id}`, {
      next: {
        tags: ["territory", id],
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
