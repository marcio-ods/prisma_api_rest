import { IsPublic } from './auth/decorators/is-public.decorator';
import { User } from 'src/user/entities/user.entity';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  getMe(@CurrentUser() currentUser: User) {
    console.log('oi');

    return currentUser;
  }
}
