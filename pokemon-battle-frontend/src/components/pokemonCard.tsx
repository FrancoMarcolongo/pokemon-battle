import React from 'react';
import { Card, CardContent, CardMedia, Typography, LinearProgress, Box } from '@mui/material';
import { Pokemon } from '../schema/pokemon/pokemon.entity';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const stats: (keyof Pokemon)[] = ['hp', 'attack', 'defense', 'speed'];
  
  return (
    <Card sx={{boxShadow: "-2px 2px 10px 0px #00000040"}}>
      <CardMedia
        component="img"
        image={pokemon.imageUrl}
        alt={pokemon.name}
        height={"200"}
        sx={{
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        {stats.map(stat => (
          <Box key={stat}>
            <Typography variant="body2" color="text.secondary">
              {stat.toUpperCase()}
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={Number(pokemon[stat]) / 10 * 100} 
              color='secondary' 
              sx={{
                backgroundColor:"lightgrey",
                height: "7px",
                borderRadius: "5px",
                '& .MuiLinearProgress-bar': {
                  borderRadius: "5px",
                }
              }} 
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

export default PokemonCard;