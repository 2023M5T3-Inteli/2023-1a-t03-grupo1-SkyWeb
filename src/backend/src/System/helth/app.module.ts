import { Module } from '@nestjs/common';
import { ControllerHelth } from './app.controller';

@Module({
    controllers: [ControllerHelth],
})
export class HealthModule {}
