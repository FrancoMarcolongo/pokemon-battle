import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  async createPokemon(pokemon: Partial<Pokemon>): Promise<Pokemon> {
    const totalPokemons = await this.pokemonRepository.count();
    pokemon.id = 'pokemon-' + (totalPokemons + 1);
    return this.pokemonRepository.save(pokemon);
  }
}
