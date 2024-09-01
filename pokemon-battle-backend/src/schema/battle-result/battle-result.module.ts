import { Module } from '@nestjs/common';
import { BattleResultService } from './battle-result.service';
import { BattleResult } from './entities/battle-result.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BattleResult])],
  providers: [BattleResultService],
})
export class BattleResultModule {}
