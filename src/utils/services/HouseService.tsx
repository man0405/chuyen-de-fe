import type { House, HouseAndUserPhone } from "@/types/HouseType";
import { SupabaseService } from "../services/BaseService";
export const HouseService = new SupabaseService<HouseAndUserPhone>(
  "house",
  "house_id"
);
