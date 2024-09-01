import React from 'react';
import { Grid2, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Pokemon } from '../schema/pokemon/pokemon.entity'

interface PokemonListProps {
  pokemons: Pokemon[];
  onSelect: (pokemon: Pokemon) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onSelect }) => {
  return (
    <Grid2 container spacing={2}>
      {pokemons.map(pokemon => (
        <Grid2 size={2.25} key={pokemon.id}>
          <Card onClick={() => onSelect(pokemon)} sx={{
            boxShadow:'-2px 2px 10px 0px #00000040',
            borderRadius: '10px',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: '0px 0px 10px 0px #00000080',
            }
          }}
          >
            <CardMedia
              component="img"
              height="100"
              image={pokemon.imageUrl}
              alt={pokemon.name}
              sx={{
                objectFit: "contain",
              }}
            />
            <CardContent sx={{padding:'5px !important'}}>
              <Typography gutterBottom variant="h6" component="span">
                {pokemon.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default PokemonList;