export interface IUser {
    first_name : string;
    last_name: string;
    username: string;
    date_of_birth: string
    name_prefix: string
}
export type ResponseData = Record<string, any> | Record<string, any>[]