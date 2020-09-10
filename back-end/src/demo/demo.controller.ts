import { Controller, Get, Post, Body } from '@nestjs/common';
import { version } from '@share';
@Controller('api')
export class DemoController {
  @Get('version')
  getData() {
    return { version };
  }

  @Get('department-list')
  getDepartment() {
    return [
      { label: '部门1', value: 1 },
      { label: '部门2', value: 2 },
      { label: '部门3', value: 3 },
      { label: '客户研发部', value: 4 },
    ];
  }
  @Post('update')
  updateItem(@Body() body){

  }
}
