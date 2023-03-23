
import { ModelDelete } from "../../models/modelDelete"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ControllerUnApplyUser } from "./app.controller"
import { ServicesDeleteApplyUser } from "./app.service"
import { DTOBodyunApplyUser } from "./DTO/DTOBodyunApplyUser"

describe('user unapply project', () => {
    let prisma: PrismaService
    let modelDelete: ModelDelete
    let servicesDeleteApplyUser: ServicesDeleteApplyUser
    let controllerUnapplyUser: ControllerUnApplyUser
    let body: DTOBodyunApplyUser = { idProject: 3, idUser: 4, idRole: 2 }

    beforeEach(() => {
        prisma = new PrismaService()
        modelDelete = new ModelDelete(prisma)
        servicesDeleteApplyUser = new ServicesDeleteApplyUser(modelDelete)
        controllerUnapplyUser = new ControllerUnApplyUser(servicesDeleteApplyUser)
    })

    describe('user unapply project', () => {
        it('user unapplied project', async () => {
            expect(await controllerUnapplyUser.deleteAplly(body)).toEqual({
                "idProject": 3,
                "idUser": 4,
                "idRole": 2
            })
        })
    })
})