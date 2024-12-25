import { FreelancerList, Search, transformUser } from '../features/dashboard';
import useFetchUsers from '../features/dashboard/hooks/query/useFetchUsers';
import { Box, Grid2 as Grid } from '@mui/material';
import withLoading from '../components/withLoading';

const FreelancerListWithLoading = withLoading(FreelancerList);

export default function Dashboard() {
  const { isPending, data, error } = useFetchUsers({ _embed: 'posts' });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Search />
      <Grid container spacing={2}>
        <FreelancerListWithLoading
          error={error}
          gridSize={4}
          isLoading={isPending}
          users={data?.map((user) => transformUser(user)) || []}
        />
      </Grid>
    </Box>
  );
}
