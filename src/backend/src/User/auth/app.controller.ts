import { AuthServices } from './app.service';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
    constructor(private readonly authServices: AuthServices) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req: any) {
        return await this.authServices.login(req.user);
    }
}
