import { fetchWithAuth } from "@/lib/api";
import { APIError } from "@/types/errors";
import { SingleResponseType } from "@/types/response";
import { DashboardStats } from "@/types/stats";

export const getStats = async (
  date?: string
): Promise<SingleResponseType<DashboardStats>> => {
  const params = new URLSearchParams();

  if (date) {
    params.set("date", date);
  }

  try {
    const response = await fetchWithAuth(
      `/api/other/v1/stats?${params.toString()}`,
      {
        next: {
          tags: ["stats"],
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
