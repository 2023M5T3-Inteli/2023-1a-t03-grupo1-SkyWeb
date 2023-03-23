import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthServices } from '../app.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authServices: AuthServices) {
        super({ usernameField: 'email' });
    }

    async validate(email: string) {
        const user = await this.authServices.validate(email);

        if (!user) {
            throw new UnauthorizedException("You doesn't have a permission");
        }

        return user;
    }
}
