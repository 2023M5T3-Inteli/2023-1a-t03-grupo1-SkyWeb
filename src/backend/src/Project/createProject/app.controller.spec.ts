import { ModelCreate } from "../../models/modelCreate"
import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ServiceCreateProject } from "./app.service"
import { ControllerCreateProject } from "./app.controller"
import { DTOBodyCreateProject } from "./DTO/DTOCreateProject"


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