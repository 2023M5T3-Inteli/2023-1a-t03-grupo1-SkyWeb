import { ModelCreate } from "../../models/modelCreate"
import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ServiceApplyProject } from './app.service'
import { ControllerApplyProject } from "./app.controller"
import { DTOBodyApplyProject } from "./DTO/DtoApplyProject"

describe(' user apply for a project', () => {

    let prisma: PrismaService
    let modelCreate: ModelCreate
    let modelSelect: ModelSelect
    let serviceApplyProject: ServiceApplyProject
    let controllerApplyProject: ControllerApplyProject
    let body: DTOBodyApplyProject = { idProject: 2, idUser: 2, idRole: 1 }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        modelCreate = new ModelCreate(prisma)
        serviceApplyProject = new ServiceApplyProject(modelCreate, modelSelect)
        controllerApplyProject = new ControllerApplyProject(serviceApplyProject)
    })

    describe('user apply project', () => {
        it('return user have aplied to the project', async () => {
            expect(await controllerApplyProject.applyProject(body)).toEqual(
                {
                    "idProject": 2,
                    "idUser": 2,
                    "idRole": 1
                }
            )
        })
    })
})