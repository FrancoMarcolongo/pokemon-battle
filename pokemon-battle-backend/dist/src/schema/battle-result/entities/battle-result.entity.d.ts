import { Pokemon } from 'src/schema/pokemon/pokemon.entity';
export declare class BattleResult {
    id: number;
    pokemon1: Pokemon;
    pokemon2: Pokemon;
    winner: Pokemon;
    date: Date;
}
