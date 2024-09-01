import { Body, Controller, Get, Post } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Post()
  async create(@Body() body: Partial<Pokemon>): Promise<Pokemon> {
    return this.pokemonService.createPokemon(body);
  }
}
