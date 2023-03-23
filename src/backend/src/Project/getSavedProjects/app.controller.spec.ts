import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ServiceGetSavedProjects } from "./app.service"
import { ControllerGetSavedProjects } from "./app.controller"
import { DTOGetSavedProjects } from "./DTO/DTOGetSavedProjects"


describe('get saved projects', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceGetSavedProjects: ServiceGetSavedProjects
    let controllerGetSavedProjects: ControllerGetSavedProjects
    let body: DTOGetSavedProjects = { idUser: 2 }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceGetSavedProjects = new ServiceGetSavedProjects(modelSelect)
        controllerGetSavedProjects = new ControllerGetSavedProjects(serviceGetSavedProjects)
    })

    describe('get saved projects', () => {
        it('return projects saved by the user if id = 1', async () => {
            expect(await controllerGetSavedProjects.getSavedProjects(body)).toEqual(
                []
            )
        })
    })
})
