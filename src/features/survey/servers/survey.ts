"use server";

import { fetchWithAuth } from "@/lib/api";
import { Survey } from "@/types/survey";
import { APIError } from "@/types/errors";
import { MutiResponseType, SingleResponseType } from "@/types/response";

export const getSurveys = async (
  params?: any
): Promise<MutiResponseType<Survey>> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "").toString();

    const response = await fetchWithAuth(
      `/api/survey/v1/survey?${searchParams}`,
      {
        next: {
          tags: ["survey"],
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

export const getSurvey = async (
  id: string
): Promise<SingleResponseType<Survey>> => {
  try {
    const response = await fetchWithAuth(`/api/survey/v1/survey/${id}`, {
      next: {
        tags: ["survey", id],
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
