import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StartLocationI } from './utils/interface/ToursI';

enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}
@Entity('Tours')
export class Tours extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column()
  maxGroupSize: number;
  @Column({
    type: 'enum',
    enum: Difficulty,
    default: Difficulty.EASY,
  })
  difficulty: Difficulty;
  @Column()
  'ratingsAverage': number;
  @Column()
  'ratingsQuantity': number;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  'price': string;
  @Column()
  'summary': string;
  @Column()
  'description': string;
  @Column()
  'imageCover': string;
  @Column('text', { array: true })
  'images': string[];
  @Column('text', { array: true })
  'startDates': Date[];
  @Column({ nullable: true })
  startLocation: StartLocationI;
}
