import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerCreateProject } from './app.controller';
import { ServiceCreateProject } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerCreateProject],
    providers: [ServiceCreateProject],
    exports: [ServiceCreateProject],
})
export class CreateProjectModule { }

/**This code defines a module for a NestJS application. Here's the breakdown of each line:

import { Module } from '@nestjs/common';

Imports the Module module from the @nestjs/common package. This module is used to define a NestJS module.
import { modelModule } from 'src/models/app.module';

Imports the modelModule module from src/models/app.module. This module is used as a dependency for the current module.
import { ControllerCreateProject } from './app.controller';

Imports the ControllerCreateProject class from the app.controller.ts file. This file contains the controller that's used to handle HTTP requests related to creating projects.
import { ServiceCreateProject } from './app.service';

Imports the ServiceCreateProject class from the app.service.ts file. This file contains the service that's used to perform business logic related to creating projects. */

/**Defines the CreateProjectModule module using the @Module decorator.
imports: Lists the dependencies that this module needs, in this case, it's modelModule.
controllers: Lists the controllers that this module contains, in this case, it's ControllerCreateProject.
providers: Lists the service providers that this module contains, in this case, it's ServiceCreateProject.
exports: Lists the service providers that this module publicly exposes, in this case, it's ServiceCreateProject.
export class CreateProjectModule { }

Exports the CreateProjectModule class. This class represents the module that we've just defined. It can be imported in other modules or files in our NestJS application. */