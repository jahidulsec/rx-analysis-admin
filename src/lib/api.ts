"use server";

import { cookies } from "next/headers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchRefreshToken = async () => {
  const cookieStore = await cookies(); // no need for await here
  const refreshToken = cookieStore.get("refreshToken")?.value;

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/v1/token/revoke`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: refreshToken ?? "" }),
    });

    const data = await response.json();

    if (!response.ok) throw data;

    return data.data.accessToken;
  } catch (error: any) {
    console.error("Token refresh failed:", error.message);
    cookieStore.delete("refreshToken");
    return null;
  }
};

export const fetchWithAuth = async (url: string, init?: RequestInit) => {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("accessToken")?.value ?? "";

  let response = await fetch(`${API_BASE_URL}${url}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    console.warn("Access token expired! Attempting to refresh...");

    const newAccessToken = await fetchRefreshToken();

    if (!newAccessToken) {
      throw new Error("User not authenticated");
    }

    // You may also want to update the cookie here if applicable
    accessToken = newAccessToken;
    cookieStore.set("accessToken", accessToken);

    response = await fetch(`${API_BASE_URL}${url}`, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  return response;
};
