import { MedicineType } from "./medicine";

export interface SurveyMedicine {
  id: string;
  surveyId: string;
  medicineId: string;
  medicineName: string;
  quantity: number;
  type: MedicineType;
  createdAt: string;
}
