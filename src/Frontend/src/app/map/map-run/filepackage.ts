export interface IFilePackage {
    isPrimarySource: boolean;
    sourceId: number;
    sourceName: string;
    sourceDescription: string;
    firstRowHeader: boolean;
    altHeadRow: number;
    delimiter: string;
    file: File;
}

export class FilePackage implements IFilePackage {
    constructor(
        public isPrimarySource: boolean,
        public sourceId: number,
        public sourceName: string,
        public sourceDescription: string,
        public firstRowHeader: boolean,
        public altHeadRow: number,
        public delimiter: string,
        public file: File
    ){}
}