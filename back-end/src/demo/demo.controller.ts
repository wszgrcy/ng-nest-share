import { Controller, Get } from '@nestjs/common';
import { version } from '@share';
@Controller('api')
export class DemoController {
  @Get('version')
  getData() {
    return { version };
  }
}
