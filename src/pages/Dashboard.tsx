import { FreelancerList, Search, transformUser } from '../features/dashboard';
import useFetchUsers from '../features/dashboard/hooks/query/useFetchUsers';
import { Box } from '@mui/material';
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
      <FreelancerListWithLoading
        error={error}
        isLoading={isPending}
        users={data?.map((user) => transformUser(user)) || []}
      />
    </Box>
  );
}
