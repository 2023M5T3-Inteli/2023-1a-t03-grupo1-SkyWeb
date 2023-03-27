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

/**This is a unit test that verifies if the function to apply for a project returns the expected values.

To perform the test, objects from the PrismaService, ModelCreate, ModelSelect, ServiceApplyProject, and ControllerApplyProject classes are defined. These objects are used to execute the business logic for applying to a project and handle HTTP requests related to this functionality.

The actual test verifies if the applyProject() function from ControllerApplyProject returns an object with the expected values. The expected object contains information about the project (idProject), the user (idUser), and the role (idRole) that the user would like to have in the project.

If the applyProject() function returns an object with these values, the test passes; otherwise, the test fails. */