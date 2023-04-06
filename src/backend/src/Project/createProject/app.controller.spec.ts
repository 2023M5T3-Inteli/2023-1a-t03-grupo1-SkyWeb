//This file contains the unit tests for creating a project.
import { ModelCreate } from "../../models/modelCreate"
import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ServiceCreateProject } from "./app.service"
import { ControllerCreateProject } from "./app.controller"
import { DTOBodyCreateProject } from "./DTO/DTOCreateProject"

/**He uses the Jest library to perform the tests.
The DTOBodyCreateProject class is used to validate and store the data of the project to be created.
The PrismaService class is a service class responsible for connecting to the Prisma database.
The ModelCreate class is responsible for creating the records in the Prisma database.
The ModelSelect class is responsible for selecting the records from the Prisma database.
The ServiceCreateProject class is a service class responsible for the business logic for creating a project.
The ControllerCreateProject class is responsible for receiving the HTTP requests and calling the appropriate services.
The "body" object contains the data of the project to be created.
The "returne project created" test verifies that the creation of a project is working correctly,
comparing the returned object with the expected object contained in the toEqual() function.*/
describe('create project', () => {
    let prisma: PrismaService
    let modelCreate: ModelCreate
    let modelSelect: ModelSelect
    let serviceCreateProject: ServiceCreateProject
    let controllerCreateProject: ControllerCreateProject
    let body: DTOBodyCreateProject = {
        idProject: null,
        name: "projeto teste",
        description: "pewoeoewpofeofjefpew",
        aplicationDeadLine: "21 December 2019 20:00",
        dateStart: "20 December 2019 14:48",
        duration: "15",
        isAproved: true,
        status: "Fechado",
        idUser: 1,
        idManager: 2,
        idTag: [2],
        idRole: [1]
    }


    beforeEach(() => {
        prisma = new PrismaService()
        modelCreate = new ModelCreate(prisma)
        modelSelect = new ModelSelect(prisma)
        serviceCreateProject = new ServiceCreateProject(modelCreate, modelSelect)
        controllerCreateProject = new ControllerCreateProject(serviceCreateProject)
    })

    describe('create project', () => {
        it('returne project created', async () => {
            expect(await controllerCreateProject.createProject(body)).toEqual({

                "id": 6,
                "name": "projeto teste",
                "description": "pewoeoewpofeofjefpew",
                "aplicationDeadLine": new Date("2019-12-21T23:00:00.000Z"),
                "duration": "15",
                "status": "Fechado",
                "dateStart": new Date("2019-12-20T17:48:00.000Z"),
                "isApproved": null,
                "idUser": 1,
                "idManager": 2

            })
        })
    })
})