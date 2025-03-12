import type { House } from "@/types/HouseType";
import { SupabaseService } from "../services/BaseService";
export const HouseService = new SupabaseService<House>("house", "id");
