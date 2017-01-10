export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    title?: string;
    phoneNumber?: string;
    email: string;
    created_By?: string;
    creation_Date?: Date;
    modified_By?: string;
    date_Modified?: Date;
    projects?: any[];
    roles: string[];
}

export class User implements IUser {
    constructor(
        public firstName: string,
        public lastName: string,     
        public email: string,
        public roles: string[],
        public title?: string,
        public phoneNumber?: string,
        public id?: number,
        public created_By?: string,
        public creation_Date?: Date,
        public modified_By?: string,
        public date_Modified?: Date,
        public projects?: any[]
    ) { }
}