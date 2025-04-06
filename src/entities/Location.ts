import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Location')
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  description: string;
  @Column()
  type: string;
  @Column({ type: 'int', array: true })
  coordinates: number[];
  @Column()
  day: number;
}
