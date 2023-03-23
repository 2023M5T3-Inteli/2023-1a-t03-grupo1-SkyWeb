import { ModelUpdate } from "../../models/modelsUpdate"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ServiceUpdateProjectStatus } from "./app.service"
import { ControllerUpdateStatusProject } from "./app.controller"
import { DTOBodyUpdateProjectStatus } from "./DTO/DTOBodyUpdateProjectStatus"

describe('update status for a project', () => {
    let prisma: PrismaService
    let modelUpdate: ModelUpdate
    let serviceUpdateProjectStatus: ServiceUpdateProjectStatus
    let controllerUpdateStatusProject: ControllerUpdateStatusProject
    let body: DTOBodyUpdateProjectStatus = { idLeader: 1, idProject: 5, progress: "Aberto" }

    beforeEach(() => {
        prisma = new PrismaService()
        modelUpdate = new ModelUpdate(prisma)
        serviceUpdateProjectStatus = new ServiceUpdateProjectStatus(modelUpdate)
        controllerUpdateStatusProject = new ControllerUpdateStatusProject(serviceUpdateProjectStatus)
    })

    describe('project status', () => {
        it("return project status", async () => {
            expect(await controllerUpdateStatusProject.updateStatusProject(body)).toEqual(200)
        })
    })
})