type project = {
    nome: string;
    descibre: string;
    idLeader: number;
};

describe('Tests funcs', () => {
    let projetos;
    let tamanho;
    let idLeader;
    beforeEach(async () => {
        projetos = [
            {
                nome: 'teste teste teste',
                descibre: 'lorem lorem lorem',
                idLeader: 1,
            },
        ];
        idLeader = 1;
    });

    describe('funcs project', () => {
        it('the length array is larger 0', () => {
            projetos.push({
                nome: 'teste teste teste',
                descibre: 'lorem lorem lorem',
                idLeader: 1,
            });

            tamanho = projetos.length;
            expect(projetos.length).toBe(tamanho);
        });

        it('only leader project can delete your project', () => {
            if (projetos[0].idLeader == idLeader) {
                expect(1).toEqual(1);
            } else {
                throw new Error('Only leader projec can delete this project');
            }
        });
    });
});
