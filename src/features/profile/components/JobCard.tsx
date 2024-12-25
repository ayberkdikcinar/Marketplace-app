import { Card, CardContent, Typography, Box } from '@mui/material';
import type { Job } from '../../types';
import Rating from '@mui/material/Rating';
import CommentList from './CommentList';
import Expandable from '../../../components/Expandable';

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  const { title, body, rating, price } = job;

  return (
    <Card
      sx={{
        borderStyle: 'solid',
        borderColor: 'grey.200',
        borderWidth: 1,
        width: 1000,
      }}
    >
      <CardContent>
        <Typography variant='h6' color='success'>
          {title}
        </Typography>
        <Box mt={2} display='flex' flexDirection='column' gap={2}>
          <Box display='flex' alignItems='center' justifyContent='space-between'>
            <Box display='flex' alignItems='center'>
              <Rating name='read-only' value={rating} readOnly />
              <Typography sx={{ ml: 1 }}>{rating.toFixed(2)}</Typography>
            </Box>
            <Typography>{price}</Typography>
          </Box>
          <Typography variant='body2' color='text.secondary'>
            {body}
          </Typography>
          <Expandable label='Comments'>
            <CommentList jobId={job.id.toString()} />
          </Expandable>
        </Box>
      </CardContent>
    </Card>
  );
}
