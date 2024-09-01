import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './schema/pokemon/pokemon.module';
import { BattleModule } from './schema/battle/battle.module';
import { BattleResultModule } from './schema/battle-result/battle-result.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemon.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + 'typeorm/migrations/*{.ts,.js}'],
      synchronize: false,
    }),
    PokemonModule,
    BattleModule,
    BattleResultModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
