
import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ControllerGetAllProject } from "./app.controller"
import { ServiceGetAllProjects } from "./app.service"


describe('get all projects', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceGetAllProjects: ServiceGetAllProjects
    let controllerGetAllProject: ControllerGetAllProject

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceGetAllProjects = new ServiceGetAllProjects(modelSelect)
        controllerGetAllProject = new ControllerGetAllProject(serviceGetAllProjects)
    })
    describe('get all projects in db', () => {
        it('return all projects', async () => {
            expect(await controllerGetAllProject.getAllProjects()).toEqual(200)
        })
    })
})