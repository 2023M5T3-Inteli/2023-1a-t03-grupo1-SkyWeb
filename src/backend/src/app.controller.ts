import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appServices: AppService) { }

    @Get()
    getHello(): string {
        return this.appServices.getHello();
    }

    @Post('create')
    createUser() {
        return this.appServices.createUser();
    }
}
