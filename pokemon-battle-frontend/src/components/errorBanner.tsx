import React from 'react';
import { Box, Typography } from '@mui/material';

interface ErrorBannerProps {
  error: string;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ error }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fdecea',
        padding: '16px',
        borderRadius: '8px',
        border: '2px solid #de2f2f',
        marginTop: '16px',
        boxShadow: '0px 5px 10px 0px #00000040',
      }}
    >
      <Typography variant="h6" sx={{color:'d9534f'}}>
        {error}
      </Typography>
    </Box>
  );
};

export default ErrorBanner;
