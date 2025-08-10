import { MedicineType } from "./medicine";

export interface DashboardStats {
  totalSurvey: number;
  medicineCount: MedicineStats[];
}

export interface MedicineStats {
  type: MedicineType;
  quantity: number;
}
