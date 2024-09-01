import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'pokemon.db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['./dist/src/typeorm/migrations/*{.ts,.js}'],
  synchronize: false,
});
