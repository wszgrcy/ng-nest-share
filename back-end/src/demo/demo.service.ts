import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(PersonEntity) private person: Repository<PersonEntity>,
  ) {}
  get() {
    return this.person.find();
  }
  add(entity: PersonEntity) {
    return this.person.insert(entity);
  }
}
