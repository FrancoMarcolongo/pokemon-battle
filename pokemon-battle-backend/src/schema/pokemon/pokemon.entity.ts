import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { PokemonType } from '../pokemon-type/pokemon-type.domain';
import { BattleResult } from '../battle-result/entities/battle-result.entity';

@Entity()
export class Pokemon {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  speed: number;

  @Column()
  hp: number;

  @Column({
    type: 'varchar',
    default: PokemonType.NORMAL,
  })
  type: PokemonType;

  @Column()
  imageUrl: string;

  @OneToMany(() => BattleResult, (battleResult) => battleResult.pokemon1)
  battlesAsPokemon1: BattleResult[];

  @OneToMany(() => BattleResult, (battleResult) => battleResult.pokemon2)
  battlesAsPokemon2: BattleResult[];
}
