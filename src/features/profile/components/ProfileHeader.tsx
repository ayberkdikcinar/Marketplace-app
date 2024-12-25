import { Box, Avatar, Typography, Button } from '@mui/material';
import type { User } from '../../types';
import { useState } from 'react';
import HireModal from './HireModal';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
type ProfileHeaderProps = {
  user?: User;
};

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  const [hireModalOpen, setHireModalOpen] = useState(false);

  if (!user) return null;

  const { photo, name, city } = user;

  return (
    <Box display='flex' alignItems='center' gap={2} p={2} boxShadow={3} borderRadius={2}>
      <Avatar alt={name} src={photo} sx={{ width: 84, height: 84 }} />
      <Box display='flex' alignItems='center' justifyContent='space-between' width='100%'>
        <Box>
          <Typography variant='h6'>{name}</Typography>
          <Typography variant='body2' color='text.secondary'>
            {city}
          </Typography>
        </Box>
        <Box display='flex' alignItems='center' gap={2}>
          <LibraryAddIcon color='primary' fontSize='large' />
          <Button
            variant='contained'
            color='success'
            sx={{ textTransform: 'none' }}
            onClick={() => setHireModalOpen(true)}
          >
            Hire
          </Button>
        </Box>
      </Box>
      {hireModalOpen && <HireModal userName={name} open={hireModalOpen} onClose={() => setHireModalOpen(false)} />}
    </Box>
  );
}
