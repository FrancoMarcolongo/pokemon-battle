import { PokemonType, typeChart } from './pokemon-type.domain';

export function getTypeEffectiveness(
  attackerType: PokemonType,
  defenderType: PokemonType,
): number {
  return typeChart[attackerType][defenderType];
}
