import type { Agent } from "@/types/AgentType";
import { SupabaseService } from "../services/BaseService";
import { use } from "react";


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
        created_a: user.created_a,
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
            .from('user')
            .select('*')
            .eq('user_id', id)
            .single();

        if (error) {
            console.error(`Error fetching user by ID:`, error.message);
            return null;
        }

        return data as Agent;
    }
}

export const AgentService = new AgentServiceClass();