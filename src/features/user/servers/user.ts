"use server";

import { fetchWithAuth } from "@/lib/api";
import { getAuthUser } from "@/lib/dal";
import { User } from "@/types/user";
import { APIError } from "@/types/errors";
import { MutiResponseType, SingleResponseType } from "@/types/response";

export const getUsers = async (
  params?: any
): Promise<MutiResponseType<User>> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "").toString();

    const response = await fetchWithAuth(`/api/user/v1/user?${searchParams}`, {
      next: {
        tags: ["user"],
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

export const getUser = async (
  id: string
): Promise<SingleResponseType<User>> => {
  try {
    const response = await fetchWithAuth(`/api/user/v1/user/${id}`, {
      next: {
        tags: ["user", id],
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

export const getAdmin = async (): Promise<SingleResponseType<User>> => {
  try {
    // get authuser
    const authUser = await getAuthUser();

    const response = await fetchWithAuth(
      `/api/user/v1/user/${authUser?.id ?? ""}`,
      {
        next: {
          tags: ["user", authUser?.id ?? "0"],
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
