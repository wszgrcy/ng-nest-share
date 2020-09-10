import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './demo/person.entity';

@Module({
  imports: [
    DemoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'demo',
      
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      entities: [PersonEntity],
      synchronize: true,
      insecureAuth:true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
