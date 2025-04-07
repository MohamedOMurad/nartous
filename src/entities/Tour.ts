import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from './Location';
import { StartLocationI } from './utils/interface/ToursI';

enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  DIFFICULT = 'difficult',
}
@Entity()
export class Tour extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ nullable: true })
  duration: number;

  @Column({ nullable: true })
  maxGroupSize: number;

  @Column({
    type: 'enum',
    enum: Difficulty,
    default: Difficulty.EASY,
    nullable: true,
  })
  difficulty: Difficulty;

  @Column('text', { array: true, nullable: true })
  guides: string[];

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price: string;

  @Column({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  imageCover: string;

  @OneToMany(() => Location, (location) => location.tour, { cascade: true })
  locations: Location[];

  @Column('text', { array: true, nullable: true })
  startDates: Date[];

  @Column({ type: 'jsonb', nullable: true })
  startLocation: StartLocationI;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  ratingsAverage: string;

  @Column({ default: 0 })
  ratingsQuantity: number;

  @Column('text', { array: true, nullable: true })
  images: string[];
}
