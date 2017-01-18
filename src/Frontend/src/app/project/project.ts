export interface IProject {
    projectId?: number;
    name: string;
    description: string;
    project_Type: string;
    client: any;
    userProjectSecs?: UserProjectSec[],
    maps?: any[];
    copyMaps?: boolean,
    sources?: any[];
    copySources?: boolean,
    targets?: any[];
    copyTargets?: boolean,
    created_By?: string;
    creation_Date?: Date;
    modified_By?: string;
    date_Modified?: Date;
}

export class ProjectViewModel implements IProject {
    constructor(
        public name: string,
        public description: string,
        public project_Type: string,
        public client: any,
        public copySources: boolean,
        public copyTargets: boolean,
        public copyMaps: boolean,
        public userProjectSecs?: UserProjectSec[],
        public projectId?: number,
        public maps?: any[],
        public sources?: any[],
        public targets?: any[]){}
}

export class Project implements IProject {
    constructor(
        public name: string,
        public description: string,
        public project_Type: string,
        public client: any,  
        public maps?: any[],
        public sources?: any[],
        public targets?: any[],
        public userProjectSecs?: UserProjectSec[],
        public projectId?: number,
        public created_By?: string,
        public creation_Date?: Date,
        public modified_By?: string,
        public date_Modified?: Date) { }
}

export interface IUserProjectSec {
    userProjSecId?: number;
    added_Date: Date;
    access_Level: number;
    active_On_Project: boolean;
    projectId: number;
    userId: number;
}

export class UserProjectSec implements IUserProjectSec {
    constructor(
        public added_Date: Date,
        public access_Level: number,
        public active_On_Project: boolean,
        public projectId: number,
        public userId: number,
        public userProjSecId?: number
    ){}
}
