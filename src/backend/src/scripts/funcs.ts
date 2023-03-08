import { ModelSelect } from 'src/models/modelSelect';

export async function verifyAllAplyeds(
    idUsers: number[],
    idProject: number,
    modelSelect: ModelSelect,
) {
    const usersApplyers = await modelSelect.getAllUsersAployed(idProject);

    const onlyIds = usersApplyers.map((item) => {
        return item.id;
    });

    return idUsers.every((value) => onlyIds.includes(value));
}
