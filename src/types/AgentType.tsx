import { BaseType } from "./BaseType";

export interface Agent extends BaseType {
    user_id: string;
    created_a?: Date;
    email: string;
    password?: string;
    avatar: string|"/placeholder.svg?height=200&width=200";
    location: string;
    about?: string;
    facebook?: string;
    phone: string;
    x?: string;
    linkedin?: string;
    name: string;

}
// export interface AgentDetails extends BaseType {
//     id: string;
//     user_id: string;

// }