import { config } from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Tours } from '../entities/Tour';
config();
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Tours],
});
