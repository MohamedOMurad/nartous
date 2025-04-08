import { IsEmail, IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number;
  @Column()
  @IsNotEmpty({ message: 'please provide a name' })
  name: string;
  @Column({
    unique: true,
  })
  @IsEmail({}, { message: 'please provide a valid email' })
  email: string;
  @Column()
  photo: string;
  @Column()
  password: string;
  @Column()
  passwordConfirm: string;
}
