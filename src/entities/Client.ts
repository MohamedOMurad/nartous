import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { Banker } from './Banker';
import { Transaction } from './Transaction';
import { Person } from './utils/Person';

@Entity('client')
export class Client extends Person {
  @Column({
    type: 'numeric',
  })
  balance: number;

  @Column({
    name: 'active',
    default: true,
  })
  is_active: boolean;

  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({ type: 'simple-array', default: [] })
  family_members: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Transaction[];

  @ManyToMany(() => Banker, {
    cascade: true,
  })
  bankers: Banker[];
}
