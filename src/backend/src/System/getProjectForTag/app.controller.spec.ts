import { ModelSelect } from "../../models/modelSelect";
import { PrismaService } from "../../prismaServices/prisma.service";
import { ServiceFilterTag } from "./app.service"
import { ControllerGetProjectForTag } from './app.controller'
import { DTOFilterTag } from './DTO/DTOFilterTag'

describe('get projects by tag', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceFilterTag: ServiceFilterTag
    let controllerGetProjectForTag: ControllerGetProjectForTag
    let body: DTOFilterTag = { tag: [11] }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceFilterTag = new ServiceFilterTag(modelSelect)
        controllerGetProjectForTag = new ControllerGetProjectForTag(serviceFilterTag)
    })

    describe('get projects by tags', () => {
        it('return projects with this tag', async () => {
            expect(await controllerGetProjectForTag.FilterTag(body)).toEqual(
                []
            )
        })
    })
})