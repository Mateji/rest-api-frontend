import { User } from '../users/user';
export class Group {
    id: string;
    name: string;
    description: string;
    users: User[];
}