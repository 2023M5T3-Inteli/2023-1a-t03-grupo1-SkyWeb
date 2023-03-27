import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ServiceGetApplayedUser } from "./app.service"
import { ControllerGetApplayedUser } from "./app.controller"
import { DtoBodyApployed } from "./DTO/DtoBodyGetApployed"


describe('get applied user', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceGetApplayedUser: ServiceGetApplayedUser
    let controllerGetApplayedUser: ControllerGetApplayedUser
    let body: DtoBodyApployed = { idProject: 1 }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceGetApplayedUser = new ServiceGetApplayedUser(modelSelect)
        controllerGetApplayedUser = new ControllerGetApplayedUser(serviceGetApplayedUser)
    })

    describe('catch the applied users', () => {
        it('return applieds user for this project', async () => {
            expect(await controllerGetApplayedUser.getApplayed(body)).toEqual([
                {
                    "id": 1,
                    "user": {
                        "email": "gustavolion@dell.com",
                        "fullName": "Gustavo lion"
                    },
                    "role": {
                        "name": "Design UX"
                    }
                },
                {
                    "id": 2,
                    "user": {
                        "email": "laurasilva@dell.com",
                        "fullName": "laura silva"
                    },
                    "role": {
                        "name": "Design UI"
                    }
                },
                {
                    "id": 3,
                    "user": {
                        "email": "diegosouza@dell.com",
                        "fullName": "Diego souza"
                    },
                    "role": {
                        "name": "Tech leader"
                    }
                }
            ])

        })
    })
})