import { Module } from "@nestjs/common";
import { modelModule } from "src/models/app.module";
import { ControllerProjectsApplied } from "./app.controller";
import { ServiceGetProjectsApplied } from "./app.service";

@Module({
    imports: [modelModule],
    controllers: [ControllerProjectsApplied],
    providers: [ServiceGetProjectsApplied],
    exports: [ServiceGetProjectsApplied],
})
export class GetProjectsApplied {}