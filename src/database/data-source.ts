import { config } from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Location } from '../entities/Location';
import { Tour } from '../entities/Tour';
config();
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Tour, Location],
});
