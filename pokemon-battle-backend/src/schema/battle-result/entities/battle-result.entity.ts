import { Pokemon } from 'src/schema/pokemon/pokemon.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class BattleResult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.battlesAsPokemon1)
  pokemon1: Pokemon;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.battlesAsPokemon2)
  pokemon2: Pokemon;

  @ManyToOne(() => Pokemon)
  winner: Pokemon;

  @Column()
  date: Date;
}
