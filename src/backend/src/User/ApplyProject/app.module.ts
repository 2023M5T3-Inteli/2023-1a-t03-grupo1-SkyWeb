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