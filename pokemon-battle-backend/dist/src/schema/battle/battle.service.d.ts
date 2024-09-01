import { Repository } from 'typeorm';
import { Pokemon } from '../pokemon/pokemon.entity';
import { BattleResult } from '../battle-result/entities/battle-result.entity';
export declare class BattleService {
    private readonly pokemonRepository;
    private readonly battleResultRepository;
    constructor(pokemonRepository: Repository<Pokemon>, battleResultRepository: Repository<BattleResult>);
    battle(pokemon1Id: string, pokemon2Id: string): Promise<BattleResult>;
    private calculateBattle;
}
