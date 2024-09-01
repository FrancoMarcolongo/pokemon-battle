import { Controller, Post, Body } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleResult } from '../battle-result/entities/battle-result.entity';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async battle(
    @Body() battleData: { pokemon1Id: string; pokemon2Id: string },
  ): Promise<BattleResult> {
    return this.battleService.battle(
      battleData.pokemon1Id,
      battleData.pokemon2Id,
    );
  }
}
