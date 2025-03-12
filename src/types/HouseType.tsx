import { BaseType } from "./BaseType";

export interface House extends BaseType {
  id: string;
  name: string;
  description: string;
  house_details: HouseDetails;
}
export interface HouseDetails extends BaseType {
  id: string;
  sqare: string;
  bed: string;
  bath: string;
  address: string;
}
