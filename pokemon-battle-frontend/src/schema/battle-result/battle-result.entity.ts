import { Pokemon } from "../pokemon/pokemon.entity";

export interface BattleResult {
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  winner: Pokemon;
  date: Date;
}