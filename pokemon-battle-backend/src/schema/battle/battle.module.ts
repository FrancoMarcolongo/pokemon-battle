import { Module } from '@nestjs/common';
import { BattleController } from './battle.controller';
import { BattleService } from './battle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '../pokemon/pokemon.entity';
import { BattleResult } from '../battle-result/entities/battle-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, BattleResult])],
  controllers: [BattleController],
  providers: [BattleService],
})
export class BattleModule {}
