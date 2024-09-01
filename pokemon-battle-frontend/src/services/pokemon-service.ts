import axios from "axios";
import { Pokemon } from "../schema/pokemon/pokemon.entity";
import { config } from "../config";

const fetchPokemons = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get<Pokemon[]>(`${config.BACKEND_URL}/pokemon`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw error;
  }
};

export const pokemonService = {
  fetchPokemons
};