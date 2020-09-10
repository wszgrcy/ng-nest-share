import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';

@Module({
  controllers: [DemoController],
  providers: [DemoService],
  imports:[TypeOrmModule.forFeature([PersonEntity])]
})
export class DemoModule {}
