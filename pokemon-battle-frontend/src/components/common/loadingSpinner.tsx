import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const LoadingSpinner: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
      }}
    >
      <CircularProgress size={24}/>
    </Box>
  );
};

export default LoadingSpinner;
