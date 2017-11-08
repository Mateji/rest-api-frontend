import { Group } from '../groups/group';

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    group: Group;
}