import { ServiceCreateProject } from './app.service';
import { Body, Controller, Post } from '@nestjs/common';
import { DTOBodyCreateProject } from './DTO/DTOCreateProject';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Project')
export class ControllerCreateProject {
    constructor(private serviceCreateProject: ServiceCreateProject) { }

    @Post('createProject')
    @ApiOperation({ summary: 'Create project' })
    @ApiResponse({
        status: 201,
        description:
            '[{  name: string, description: string, aplicationDeadLine: string, dateStart: string, duration: string, isAproved: true, status: string, idUser: 0, idManager: 0, idProject: 0, idTag: [ string ], idRole: [ string]}]',
    })
    @ApiResponse({
        status: 400,
        description:
            `Failed to create a project`
    })
    @ApiResponse({
        status: 404,
        description:
            `Does not exist roles or tags with this id's`
    })
    @ApiResponse({
        status: 409,
        description:
            'This name is in use'
    })
    // TODO fazer Api response para sucess e faild
    async createProject(@Body() body: DTOBodyCreateProject) {
        const result = await this.serviceCreateProject.execute(body);
        return result;
    }
}

/**This TypeScript file is a NestJS controller that handles HTTP requests for creating a new project. It defines a ControllerCreateProject class that receives an instance of ServiceCreateProject service through its constructor, and exports a createProject method that handles POST HTTP requests for the /createProject route.

ControllerCreateProject Class
The ControllerCreateProject class is decorated with the @Controller() decorator, which marks it as a controller class. It also has an @ApiTags('Project') decorator, which defines the tag for this controller in the API documentation.

Constructor
The ControllerCreateProject class has a constructor that receives an instance of ServiceCreateProject through the private serviceCreateProject: ServiceCreateProject parameter. This parameter is marked as private, which means it can only be accessed within the class.

createProject Method
The createProject method is decorated with the @Post('createProject') decorator, which defines the HTTP route for this method. It receives the request data through the @Body() body: DTOBodyCreateProject parameter, which is an object of type DTOBodyCreateProject defined in another file.

This method calls the execute method of the ServiceCreateProject service, passing the request data as an argument. The result of this method is returned as the response to the HTTP request.

The createProject method is also decorated with several '@ApiResponse' decorators that define the possible responses to this route, based on the HTTP status code. These decorators include a description property that explains the response, and the expected format of the response body.

Finally, the createProject method is decorated with an '@ApiOperation' decorator that defines a summary for this route in the API documentation.

Imported Modules and Interfaces
The code imports several modules and interfaces from NestJS and the @nestjs/swagger module.

@nestjs/common Module
Body: used to define the parameter that receives the HTTP request body;
Controller: used to define a controller class;
Post: used to decorate a method that handles POST HTTP requests.
DTOBodyCreateProject Interface
This interface defines the structure of the object received in the request body to create a project.

@nestjs/swagger Module
ApiOperation: used to document the operation performed by the route;
ApiResponse: used to document the possible responses of the route;
ApiTags: used to define the tags that will be used in the API documentation.
The documentation has been improved to provide a better understanding of the code. */