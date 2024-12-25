import JobCard from './JobCard';
import { Fragment } from 'react/jsx-runtime';
import type { Job } from '../../types';
import { List, ListItem } from '@mui/material';

type JobCardListProps = {
  jobs: Job[];
};

export default function JobCardList({ jobs }: JobCardListProps) {
  return (
    <List sx={{ padding: 0 }}>
      {jobs.map((job) => (
        <Fragment key={job.id}>
          <ListItem disableGutters>
            <JobCard job={job} />
          </ListItem>
        </Fragment>
      ))}
    </List>
  );
}
