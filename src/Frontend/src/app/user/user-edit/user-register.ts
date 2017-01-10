export interface IRegisterUser {
    id?: number;
    firstName: string;
    lastName: string;
    title?: string;
    phoneNumber?: string;
    email: string;
    password: string,
    projects?: any[];
    roles: string[];
}

export class RegisterUser implements IRegisterUser {
    constructor(
        public firstName: string,
        public lastName: string,     
        public email: string,
        public password: string,
        public roles: string[],
        public title?: string,
        public phoneNumber?: string,
        public projects?: any[]
    ) { }
}