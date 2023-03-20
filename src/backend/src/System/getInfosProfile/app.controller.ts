import { Controller, Get } from '@nestjs/common';
import { getProfileInfo } from './app.service';
import { ApiTags } from '@nestjs/swagger';


@Controller()
@ApiTags('System')
export class ProfileController {
  constructor(private readonly profileService: getProfileInfo) {}

  @Get()
  getProfileInfo(): any {
    return this.profileService.getProfileInfo();
  }
}
