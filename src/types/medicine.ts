export interface Medicine {
  id: string;
  name: string;
  type: MedicineType;
  createdAt: string;
  updatedAt: string;
}

export type MedicineType = "radiant" | "competitor";
