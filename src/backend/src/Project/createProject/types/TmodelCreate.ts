/**name: uma string que representa o nome do projeto.

description: uma string que representa a descrição do projeto.

applicationDeadLine: uma string que representa a data limite de inscrição do projeto. É recomendável usar uma data e hora para esse tipo de campo.

dateStart: uma string que representa a data de início do projeto. É recomendável usar uma data e hora para esse tipo de campo.

duration: uma string que representa a duração do projeto. É recomendável usar uma data e hora para esse tipo de campo.

isApproved: um valor booleano que representa se o projeto foi aprovado ou não.

status: uma string que representa o status atual do projeto.

idUser: um número que representa o ID do usuário associado ao projeto.

idManager: um número que representa o ID do gerente associado ao projeto.

idProject: um número que representa o ID do projeto.

idTag: uma matriz de números que representa os IDs das tags associadas ao projeto.

idRole: uma matriz de números que representa os IDs dos papéis associados ao projeto. */
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

    idTag: number[];
    idRole: number[];
};
