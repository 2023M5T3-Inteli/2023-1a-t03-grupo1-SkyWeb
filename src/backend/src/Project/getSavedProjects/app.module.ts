import { Module } from "@nestjs/common";
import { modelModule } from "src/models/app.module";
import { ControllerGetSavedProjects } from "./app.controller";
import { ServiceGetSavedProjects } from "./app.service";


@Module({
    imports: [modelModule],
    controllers: [ControllerGetSavedProjects],
    providers: [ServiceGetSavedProjects],
    exports: [ServiceGetSavedProjects],
})
export class GetSavedProjects { }