import { ModelCreate } from "../../models/modelCreate"
import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ControllerSaveProject } from "./app.controller"
import { ServiceSaveProject } from "./app.service"
import { DTOSaveProject } from "./DTO/DTOSaveProject"

describe('save project', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let modelCreate: ModelCreate
    let serviceSaveProject: ServiceSaveProject
    let controllerSaveProject: ControllerSaveProject
    let body: DTOSaveProject = { idUser: 1, idProject: 1 }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        modelCreate = new ModelCreate(prisma)
        serviceSaveProject = new ServiceSaveProject(modelCreate, modelSelect)
        controllerSaveProject = new ControllerSaveProject(serviceSaveProject)
    })

    describe('user save a project', () => {
        it('return saved project', async () => {
            expect(await controllerSaveProject.saveProject(body)).toEqual(
                undefined
            )
        })
    })
})