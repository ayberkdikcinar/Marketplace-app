import JobCardList from '../features/profile/components/JobCardList';
import useFetchPosts from '../features/profile/hooks/query/useFetchPosts';
import { transformJob } from '../features/profile/services/transformJob';
import UserDetails from '../features/profile/components/UserDetails';
import ProfileHeader from '../features/profile/components/ProfileHeader';
import { Paper, Grid2, Typography } from '@mui/material';
import { transformUser } from '../features/dashboard';
import withLoading from '../components/withLoading';
import { useParams } from 'react-router-dom';
import useFetchUserById from '../features/dashboard/hooks/query/useFetchUserById';

const ProfileHeaderWithLoading = withLoading(ProfileHeader);
const UserDetailsWithLoading = withLoading(UserDetails);
const JobCardListWithLoading = withLoading(JobCardList);

export default function Portfolio() {
  const { id } = useParams();
  const { isPending: isUserLoading, data: userData, error: userError } = useFetchUserById(id!);
  const { isPending: arePostsLoading, data: postsData, error: postsError } = useFetchPosts({ userId: id! });

  const user = userData ? transformUser(userData) : undefined;

  return (
    <Paper sx={{ p: 2, width: '100%' }}>
      <Grid2 container spacing={1}>
        <Grid2 size={12}>
          <ProfileHeaderWithLoading isLoading={isUserLoading} error={userError} user={user} />
        </Grid2>
        <Grid2 size={4}>
          <UserDetailsWithLoading isLoading={isUserLoading} error={userError} user={user} />
        </Grid2>
        <Grid2 size={8}>
          <Typography variant='h6'>Completed Jobs</Typography>
          <JobCardListWithLoading
            isLoading={arePostsLoading}
            error={postsError}
            jobs={postsData ? postsData?.map((post) => transformJob(post)) : []}
          />
        </Grid2>
      </Grid2>
    </Paper>
  );
}
