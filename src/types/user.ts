export interface User {
  id: string;
  fullName: string;
  username: string;
  password: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = "superadmin" | "chq-admin" | "mio";
