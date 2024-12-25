import { Button, Card, Box, Avatar, CardActions, CardContent, Typography } from '@mui/material';
import type { User } from '../../types';
import InformationPair from '../../../components/InformationPair';

type FreeLancerCardProps = {
  user: User;
  onClick: () => void;
};

export default function FreelancerCard({ user, onClick }: FreeLancerCardProps) {
  const { name, email, phone, photo, city, finished_job_count } = user;

  return (
    <Card sx={{ width: '100%', boxShadow: 3, borderRadius: 2 }}>
      <Box display='flex' justifyContent='center' alignItems='center' pt={1}>
        <Avatar alt={name} src={photo} sx={{ width: 72, height: 72 }} />
      </Box>
      <CardContent>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='body1'>{finished_job_count} Jobs Completed</Typography>
        <Box mt={2}>
          <InformationPair label='Email' value={email} />
          <InformationPair label='City' value={city} />
          <InformationPair label='Phone' value={phone} />
        </Box>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button aria-label='see-more' variant='outlined' onClick={onClick}>
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
