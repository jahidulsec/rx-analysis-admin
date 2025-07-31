import { UserRole } from "./user";

export type AuthUser = {
  id: string;
  username: string;
  fullName: string;
  role: UserRole;
};
