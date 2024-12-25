import React from 'react';
import Skeleton from './Skeleton';
import { Typography } from '@mui/material';

interface WithLoadingProps {
  isLoading: boolean;
  error: Error | null;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return ({ isLoading, error, ...props }: WithLoadingProps & P) => {
    if (isLoading) {
      return <Skeleton height={8} rows={20} />;
    }

    if (error) {
      return (
        <Typography color='error' variant='body1'>
          Error: {error.message}
        </Typography>
      );
    }

    return <Component {...(props as P)} />;
  };
};

export default withLoading;
