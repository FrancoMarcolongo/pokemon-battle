import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Pokemon } from './schema/pokemon/pokemon.entity';
import { BattleResult } from './schema/battle-result/battle-result.entity';
import PokemonList from './components/pokemonList';
import BattleArena from './components/battleArena';
import BattleResultBanner from './components/battleResultBanner';
import { pokemonService } from './services/pokemon-service';
import { battleService } from './services/battle-service';
import ErrorBanner from './components/errorBanner';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opponent, setOpponent] = useState<Pokemon | null>(null);
  const [battleResult, setBattleResult] = useState<BattleResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemons = await pokemonService.fetchPokemons();
        setPokemons(pokemons);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    }

    void fetchPokemons();
  }, []);

  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setBattleResult(null);
    const remainingPokemon = pokemons.filter(p => p.id !== pokemon.id);
    const randomOpponent = remainingPokemon[Math.floor(Math.random() * remainingPokemon.length)];
    setOpponent(randomOpponent);
  };

  const startBattle = async () => {
    if (!selectedPokemon || !opponent) return;
    setError(null);
    setLoading(true);
    try{
      const battleResult = await battleService.startBattle(selectedPokemon.id, opponent.id);
      setBattleResult(battleResult);
    } catch (error) {
      setError('Error starting battle');
      console.error('Error starting battle:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ 
        margin: '32px auto',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Battle of Pokemon
      </Typography>
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" gutterBottom>
          Select your pokemon
        </Typography>
      </Box>
      <PokemonList pokemons={pokemons} onSelect={handlePokemonSelect} />
      {battleResult && (
        <BattleResultBanner 
          winner={
            battleResult.winner.id === selectedPokemon?.id ? selectedPokemon.name : opponent?.name || ''
          }
        />
      )}
      {error && (
        <ErrorBanner error={error} />
      )}
      {selectedPokemon && opponent && (
        <BattleArena
          pokemon1={selectedPokemon}
          pokemon2={opponent}
          onBattleStart={startBattle}
          loading={loading}
        />
      )}
    </Container>
  );
}

export default App;