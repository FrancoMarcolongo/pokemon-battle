import { PokemonType } from '../pokemon-type/pokemon-type.domain';
import { BattleResult } from '../battle-result/entities/battle-result.entity';
export declare class Pokemon {
    id: string;
    name: string;
    attack: number;
    defense: number;
    speed: number;
    hp: number;
    type: PokemonType;
    imageUrl: string;
    battlesAsPokemon1: BattleResult[];
    battlesAsPokemon2: BattleResult[];
}
