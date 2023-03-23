import { ModelDelete } from "../../models/modelDelete"
import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ServiceAcceptApplyUser } from "./app.service"
import { ControllerAcceptApply } from './app.controller'
import { DTOBodyAcceptUser } from "./DTO/DTOBodyAcceptUser"


describe('accept applys from user', () => {
    let prisma: PrismaService
    let modelDelete: ModelDelete
    let modelSelect: ModelSelect
    let serviceAcceptApplyUser: ServiceAcceptApplyUser
    let controllerAcceptApply: ControllerAcceptApply
    let body: DTOBodyAcceptUser = { idOwnerProject: 3, idProject: 3, idUsers: [2] }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        modelDelete = new ModelDelete(prisma)
        serviceAcceptApplyUser = new ServiceAcceptApplyUser(modelDelete, modelSelect)
        controllerAcceptApply = new ControllerAcceptApply(serviceAcceptApplyUser)
    })

    describe('accept user for a project', () => {
        it('return user accept or not', async () => {
            expect(await controllerAcceptApply.acceptUserForWorkinProject(body)).toEqual({ "count": 0 })
        })
    })
})