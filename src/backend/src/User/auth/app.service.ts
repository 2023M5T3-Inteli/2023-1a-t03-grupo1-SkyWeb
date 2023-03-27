import { ModelSelect } from './../../models/modelSelect';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServices {
    constructor(
        private readonly modelSelect: ModelSelect,
        private readonly jwtServices: JwtService,
    ) {}

    async login(user) {
        const payload = { sub: user.id };

        return {
            user: user,
            token: this.jwtServices.sign(payload),
        };
    }

    async validate(email) {
        let user;

        try {
            user = await this.modelSelect.getUserByEmail(email);
        } catch (error) {
            return null;
        }

        return user;
    }
}
