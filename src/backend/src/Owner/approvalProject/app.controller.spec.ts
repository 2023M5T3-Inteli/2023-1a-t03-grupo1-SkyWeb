import { ServiceUpdateApprovalProject } from './app.service'
import { ControllerApprovalProject } from './app.controller'
import { ModelUpdate } from '../../models/modelsUpdate'
import { ModelSelect } from '../../models/modelSelect'
import { PrismaService } from '../../prismaServices/prisma.service'
import { DTOBodyApprovalProject } from './DTO/DTOBodyApprovalProject'

describe('approval project', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let modelUpdate: ModelUpdate
    let serviceUpdateApprovalProject: ServiceUpdateApprovalProject
    let controllerApprovalProject: ControllerApprovalProject
    let body: DTOBodyApprovalProject = { idManager: 1, idProject: 4, isApproved: true }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        modelUpdate = new ModelUpdate(prisma)
        serviceUpdateApprovalProject = new ServiceUpdateApprovalProject(modelUpdate, modelSelect)
        controllerApprovalProject = new ControllerApprovalProject(serviceUpdateApprovalProject)
    })

    describe('test approval projects', () => {
        it('returne approved or rejected project', async () => {
            expect(await controllerApprovalProject.approvalProject(body)).toEqual({
                "id": 4,
                "name": "projeto 4",
                "description": "lorem lorem lorem lorem lorem lorem lorem",
                "aplicationDeadLine": new Date('2023-08-19T03:00:00.000Z'),
                "duration": "10 semanas",
                "status": "",
                "dateStart": new Date("2023-08-27T03:00:00.000Z"),
                "isApproved": true,
                "idUser": 3,
                "idManager": 1
            })
        })
    })
})