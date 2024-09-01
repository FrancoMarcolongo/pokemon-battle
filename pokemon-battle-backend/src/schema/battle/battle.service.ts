import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../pokemon/pokemon.entity';
import { BattleResult } from '../battle-result/entities/battle-result.entity';
import { getTypeEffectiveness } from '../pokemon-type/pokemon-type.application';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(BattleResult)
    private readonly battleResultRepository: Repository<BattleResult>,
  ) {}

  async battle(pokemon1Id: string, pokemon2Id: string): Promise<BattleResult> {
    const pokemon1 = await this.pokemonRepository.findOne({
      where: { id: pokemon1Id },
    });
    const pokemon2 = await this.pokemonRepository.findOne({
      where: { id: pokemon2Id },
    });

    if (!pokemon1 || !pokemon2) {
      throw new NotFoundException('One or both Pokémon not found');
    }

    const winner = this.calculateBattle(pokemon1, pokemon2);

    const battleResult = new BattleResult();
    battleResult.pokemon1 = pokemon1;
    battleResult.pokemon2 = pokemon2;
    battleResult.winner = winner;
    battleResult.date = new Date();

    return this.battleResultRepository.save(battleResult);
  }

  private calculateBattle(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
    const pokemon1Speed = pokemon1.speed;
    const pokemon2Speed = pokemon2.speed;

    let firstAttacker: Pokemon;
    let secondAttacker: Pokemon;

    if (pokemon1Speed > pokemon2Speed) {
      firstAttacker = pokemon1;
      secondAttacker = pokemon2;
    } else if (pokemon1Speed < pokemon2Speed) {
      firstAttacker = pokemon2;
      secondAttacker = pokemon1;
    } else {
      if (pokemon1.attack > pokemon2.attack) {
        firstAttacker = pokemon1;
        secondAttacker = pokemon2;
      } else {
        firstAttacker = pokemon2;
        secondAttacker = pokemon1;
      }
    }

    let winner: Pokemon;
    let turn = 1;
    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      const attacker = turn % 2 === 1 ? firstAttacker : secondAttacker;
      const defender = turn % 2 === 1 ? secondAttacker : firstAttacker;

      const basedamage = Math.max(attacker.attack - defender.defense, 1);
      const typeEffectiveness =
        getTypeEffectiveness(attacker.type, defender.type) || 1;
      const damage = Math.ceil(basedamage * typeEffectiveness);
      defender.hp -= damage;

      if (defender.hp <= 0) {
        winner = attacker;
        break;
      }

      turn += 1;
    }

    return winner;
  }
}
