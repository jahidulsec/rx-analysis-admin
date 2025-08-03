import { getAuthUser } from "@/lib/dal";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const authUser = await getAuthUser();

  if (!authUser) redirect("/login");

  return redirect("/dashboard");
}
