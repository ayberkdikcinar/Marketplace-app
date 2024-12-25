import FreelancerCard from './FreelancerCard';
import type { User } from '../../types';
import { Grid2 as Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type FreeLancerListProps = {
  users: User[];
  gridSize?: number;
};

export default function FreelancerList({ users, gridSize = 4 }: FreeLancerListProps) {
  const navigate = useNavigate();

  return (
    <>
      {users.map((user) => (
        <Grid size={gridSize}>
          <FreelancerCard key={user.id} user={user} onClick={() => navigate(`/portfolio/${user.id}`)} />
        </Grid>
      ))}
    </>
  );
}
