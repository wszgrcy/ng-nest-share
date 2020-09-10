import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { PersonShare } from '@share';
@Entity()
export class PersonEntity implements PersonShare {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
  name: string;
  age: number;
  sex: number;
  department: number;
}
