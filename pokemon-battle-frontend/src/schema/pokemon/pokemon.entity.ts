import { PokemonType } from "../pokemon-type/pokemon-type.domain";

export interface Pokemon {
  id: string;
  name: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  type: PokemonType;
  imageUrl: string;
}