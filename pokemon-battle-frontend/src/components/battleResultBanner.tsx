import React from 'react';
import { Box, Typography } from '@mui/material';

interface BattleResultBannerProps {
  winner: string;
}

const BattleResultBanner: React.FC<BattleResultBannerProps> = ({ winner }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#e0f7fa',
        padding: '16px',
        borderRadius: '8px',
        border: '2px solid',
        marginTop: '16px',
        boxShadow: '0px 5px 10px 0px #00000040',
      }}
    >
      <Typography variant="h6">
        {winner} wins!
      </Typography>
    </Box>
  );
};

export default BattleResultBanner;
