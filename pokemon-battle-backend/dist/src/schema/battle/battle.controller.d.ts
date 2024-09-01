import { BattleService } from './battle.service';
import { BattleResult } from '../battle-result/entities/battle-result.entity';
export declare class BattleController {
    private readonly battleService;
    constructor(battleService: BattleService);
    battle(battleData: {
        pokemon1Id: string;
        pokemon2Id: string;
    }): Promise<BattleResult>;
}
