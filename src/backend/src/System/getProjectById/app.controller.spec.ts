import { PrismaService } from "../../prismaServices/prisma.service"
import { ModelSelect } from '../../models/modelSelect';
import { ServiceGetProjectsByUserId } from './app.service'
import { ControllerGetProjectById } from './app.controller'
import { DTOBodyGetProjectByUserId } from './DTO/DTOBodyGetProjectByUserId'

describe(' get project by idUser', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceGetProjectsByUserId: ServiceGetProjectsByUserId
    let controllerGetProjectById: ControllerGetProjectById
    let body: DTOBodyGetProjectByUserId = { idUser: 2 }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceGetProjectsByUserId = new ServiceGetProjectsByUserId(modelSelect)
        controllerGetProjectById = new ControllerGetProjectById(serviceGetProjectsByUserId)
    })

    describe('get all projects from especific idUSer', () => {
        it('retunr projects', async () => {
            expect(await controllerGetProjectById.getProjectByUserId(body)).toEqual(
                []
            )
        })
    })
})