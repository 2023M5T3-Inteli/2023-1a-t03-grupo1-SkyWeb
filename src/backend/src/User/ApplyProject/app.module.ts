import { Module } from "@nestjs/common"
import { modelModule } from "src/models/app.module";
import { ControllerApplyProject } from "./app.controller";
import { ServiceApplyProject } from "./app.service";

@Module({
    imports: [modelModule],
    controllers: [ControllerApplyProject],
    providers: [ServiceApplyProject],
    exports: [ServiceApplyProject]
})
export class applyProject { }

/**This code defines a module applyProject using the NestJS framework. 
 * It imports a module, defines a controller and a service, and exports the service for other modules to use.
 */