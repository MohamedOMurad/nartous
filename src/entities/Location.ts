import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tour } from './Tour';

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
  @ManyToOne(() => Tour, (tour) => tour.locations, { onDelete: 'CASCADE' })
  tour: Tour;
}
