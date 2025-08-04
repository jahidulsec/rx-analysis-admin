"use server";

import { cookies } from "next/headers";
import { env } from "@/data/env/client";

const fetchRefreshToken = async () => {
  const cookie = await cookies();

  try {
    // get refresh token
    const refreshToken = cookie.get("refreshToken")?.value;

    const response = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/api/auth/v1/token/revoke`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: refreshToken ?? "" }),
      }
    );

    const data = await response.json();

    if (!response.ok) throw data;

    return data.data.accessToken;
  } catch (error) {
    console.log((error as any).message);

    return null;
  }
};

export const fetchWithAuth = async (url: string, init?: RequestInit) => {
  let accessToken = "";

  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}${url}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${accessToken ?? " "}`,
    },
  });

  if (response.status === 401) {
    console.warn("Access token expired! Attempting to refresh...");
    const newAccessToken = await fetchRefreshToken();

    if (!newAccessToken) {
      throw new Error("User not authenticated");
    }

    // set access token
    accessToken = newAccessToken;

    return await fetch(`${env.NEXT_PUBLIC_API_URL}${url}`, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${newAccessToken ?? ""}`,
      },
    });
  }

  return response;
};
