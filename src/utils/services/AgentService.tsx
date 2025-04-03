import type { Agent } from "@/types/AgentType";
import { SupabaseService } from "../services/BaseService";



class AgentServiceClass extends SupabaseService<Agent> {
    constructor() {
        super("user", "user_id");
    }
    async getAll(): Promise<Agent[]> {
        const { data, error } = await this.supabase
            .from("user")
            .select("*"); // Select all fields instead of just user_id

        if (error) throw error;
        // return data as Agent[];

        const agents: Agent[] = data.map(user => ({
            user_id: user.user_id,
            created_at: user.created_a,
            created_by: user.user_id,
            email: user.email,
            avatar: user.avatar,
            location: user.location,
            about: user.about,
            facebook: user.facebook,
            phone: user.phone,
            x: user.x,
            linkedin: user.linkedin,
            name: user.name
        }));

        return agents;
    }
    async getById(id: string): Promise<Agent | null> {
        const { data, error } = await this.supabase
            .from("user")
            .select("*")
            .eq("user_id", id)
            .single();

        if (error) throw error;

        return data as Agent | null;
    }
}
export const AgentService = new AgentServiceClass();
