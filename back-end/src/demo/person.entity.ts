import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { PersonShare } from '@share';
@Entity()
export class PersonEntity implements PersonShare {
  @PrimaryColumn({ type: 'uuid' })
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  sex: number;
  @Column()
  department: number;
}
