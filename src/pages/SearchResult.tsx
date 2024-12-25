import { FreelancerList, Search, useFilteredUsers } from '../features/dashboard';
import useFetchUsers from '../features/dashboard/hooks/query/useFetchUsers';
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import withLoading from '../components/withLoading';
import OptionCompletedJobs from '../features/dashboard/components/OptionCompletedJobs';
import useSearchQueryParams from '../features/dashboard/hooks/useSearchQueryParams';

const FreelancerListWithLoading = withLoading(FreelancerList);

export default function SearchResult() {
  const { term, criteria, minJob } = useSearchQueryParams();
  const { isPending, data, error } = useFetchUsers({ _embed: 'posts' });
  const { searchResults } = useFilteredUsers({
    data: data || [],
    filters: { term, criteria, minJobCompleted: minJob },
  });

  return (
    <Grid container spacing={1} padding={2}>
      <Grid size={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Search />
      </Grid>
      <Grid size={2}>
        <OptionCompletedJobs />
      </Grid>
      <Grid size={10}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {searchResults.length === 0 && (
            <Typography variant='body1' color='info'>
              No results found
            </Typography>
          )}
          <Grid container spacing={2}>
            <FreelancerListWithLoading gridSize={12} error={error} isLoading={isPending} users={searchResults} />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
