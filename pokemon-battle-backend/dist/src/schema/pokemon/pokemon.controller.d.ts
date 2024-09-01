import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    findAll(): Promise<Pokemon[]>;
    create(body: Partial<Pokemon>): Promise<Pokemon>;
}
