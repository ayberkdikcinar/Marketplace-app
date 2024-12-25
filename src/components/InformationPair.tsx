import { Box, Typography } from '@mui/material';

type InformationPairProps = {
  label: string;
  value: string;
};

export default function InformationPair({ label, value }: InformationPairProps) {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
      <Typography variant='body2' color='text.secondary' mr={1}>
        {label}:
      </Typography>
      <Typography variant='body2'>{value}</Typography>
    </Box>
  );
}
