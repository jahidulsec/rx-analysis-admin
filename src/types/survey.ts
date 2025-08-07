import { SurveyMedicine } from "./survey-medicine";

export interface Survey {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorMobile: string;
  territoryId: string;
  territoryName: string;
  createdBy: string;
  surveyorName: string;
  createdAt: string;
}

export interface SurveyDetails extends Survey {
  medicines: SurveyMedicine[];
}
