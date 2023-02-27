export type Tproject = {
    name: string;
    description: string;
    aplicationDeadLine: string; //Use Date-Time
    dateStart: string; //Use Date-Time
    duration: string; //Use Date-Time
    isAproved: boolean;
    status: string;

    idUser: number;
    idManager: number;
    idProject: number;

    idTag: number;
    idRole: number;
};
