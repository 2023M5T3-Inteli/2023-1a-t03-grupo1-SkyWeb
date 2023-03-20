import { Module } from "@nestjs/common"
import { modelModule } from "src/models/app.module";
import { PostApplyProject } from "./app.controller";
import { ServiceApplyProject } from "./app.service";

@Module({
    imports: [modelModule],
    controllers: [PostApplyProject],
    providers: [ServiceApplyProject],
    exports: [ServiceApplyProject]
})
export class applyProject { }