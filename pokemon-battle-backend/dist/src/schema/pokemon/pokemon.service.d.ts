import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';
export declare class PokemonService {
    private readonly pokemonRepository;
    constructor(pokemonRepository: Repository<Pokemon>);
    findAll(): Promise<Pokemon[]>;
    createPokemon(pokemon: Partial<Pokemon>): Promise<Pokemon>;
}
