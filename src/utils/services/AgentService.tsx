import type { Agent } from "@/types/AgentType";
import { SupabaseService } from "../services/BaseService";
export const AgentService = new SupabaseService<Agent>("user", "user_id");

// class AgentServiceClass extends SupabaseService<Agent> {
//     constructor() {
//         super("user", "user_id");
//     }
//     async getAll(): Promise<Agent[]> {
//         const { data, error } = await this.supabase
//             .from("user")
//             .select("*"); // Select all fields instead of just user_id

//         if (error) throw error;
//         return data as Agent[];
//     }

//     async getById(id: string): Promise<Agent | null> {
//         const { data, error } = await this.supabase
//             .from('user')
//             .select('*')
//             .eq('user_id', id)
//             .single();

//         if (error) {
//             console.error(`Error fetching user by ID:`, error.message);
//             return null;
//         }

//         return data as Agent;
//     }
// }

// export const AgentService = new AgentServiceClass();