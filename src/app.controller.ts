import { Controller, Get } from '@nestjs/common';
import { SetCookies, ClearCookies, SignedCookies } from '@nestjsplus/cookies';
import { v4 as uuidv4} from 'uuid';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @SetCookies({httpOnly: true, secure: true, path: '/'}, {name: 'refreshToken', value: uuidv4()})
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @ClearCookies('refreshToken')
  @Get('goodbye')
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }
}
