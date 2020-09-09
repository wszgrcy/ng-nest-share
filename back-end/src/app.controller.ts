import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { version } from '@share';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return version
  }

}
