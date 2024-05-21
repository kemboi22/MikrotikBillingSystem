import { Config } from 'ziggy-js';

interface Default {

}
export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
export interface Router extends Default{
    name: string;
    ipAddress: string;
    username: string;
    password: string;
    connect: boolean;
    port: number;
    protocol?: string;
    secret?: string;
}
