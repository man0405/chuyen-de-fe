import { Agent } from "./AgentType";
import { BaseType } from "./BaseType";

export interface House extends BaseType {
	house_id: string;
	name: string;
	description?: string;
	user_id?: string;
	price?: string;
	old_price?: string;
	build_year?: string;
	sell_date?: string;
	size?: string;
	bed?: string;
	bath?: string;
	default_image?: string;
	star?: number;
	location?: string;
	status?: string;
	feature?: string;
	image?: string;
	house_details?: HouseDetails;
}
export interface HouseDetails extends BaseType {
	id: string;
	sqare: string;
	bed: string;
	bath: string;
	address: string;
}

export type HouseAndUserPhone = House & {
	user: Pick<Agent, "phone" | "name" | "avatar">;
};
