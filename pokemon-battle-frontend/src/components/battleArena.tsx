import React from 'react';
import { Grid2, Button, Box } from '@mui/material';
import PokemonCard from './pokemonCard';
import { Pokemon } from '../schema/pokemon/pokemon.entity';
import LoadingSpinner from './common/loadingSpinner';

interface BattleArenaProps {
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  onBattleStart: () => void;
  loading: boolean;
}

const BattleArena: React.FC<BattleArenaProps> = ({ 
  pokemon1,
  pokemon2,
  onBattleStart,
  loading
}) => {
  return (
    <Box mt={4}>
      <Grid2 container spacing={2} justifyContent={'center'}>
        <Grid2 size={4}>
          <PokemonCard pokemon={pokemon1} />
        </Grid2>
        <Grid2 size={2}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
            <Button 
              variant="contained" 
              color="primary" 
              onClick={onBattleStart}
              sx={{
                textTransform: 'none',
                height: '40px',
              }}
              disabled={loading}
              >
              {loading ? <LoadingSpinner /> : 'Start Battle'}
            </Button>
          </Box>
        </Grid2>
        <Grid2 size={4}>
          <PokemonCard pokemon={pokemon2} />
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default BattleArena;