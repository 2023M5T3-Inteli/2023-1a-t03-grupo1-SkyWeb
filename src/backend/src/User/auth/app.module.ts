import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { modelModule } from 'src/models/app.module';
import { AuthController } from './app.controller';
import { AuthServices } from './app.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [
        modelModule,
        PassportModule,
        JwtModule.register({
            privateKey: process.env.JWT_SECRETE_KEY,
            signOptions: { expiresIn: '10h' },
        }),
    ],

    controllers: [AuthController],

    providers: [AuthServices, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
