import { Client } from "../client/client";

export interface IProject {
    projectId?: number;
    name: string;
    description: string;
    project_Type: string;
    client: Client;
    userProjectSecs?: UserProjectSec[],
    projectMaps?: any[];
    projectSources?: any[];
    projectTargets?: any[];
    created_By?: string;
    creation_Date?: Date;
    modified_By?: string;
    date_Modified?: Date;
}

export class Project implements IProject {
    constructor(
        public name: string,
        public description: string,
        public project_Type: string,
        public client: Client,
        public userProjectSecs?: UserProjectSec[],
        public projectId?: number,
        public projectMaps?: any[],
        public projectSources?: any[],
        public projectTargets?: any[],
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
