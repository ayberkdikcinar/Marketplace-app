import { List, ListItem, Typography } from '@mui/material';
import useFetchComments from '../hooks/query/useFetchComments';
import CommentCard from './CommentCard';
import type { Comment } from '../../types';
import Skeleton from '../../../components/Skeleton';

type CommentListProps = {
  jobId: string;
};

export default function CommentList({ jobId }: CommentListProps) {
  const { data: comments, isPending, error } = useFetchComments({ postId: jobId });

  if (isPending) {
    return <Skeleton height={4} rows={10} />;
  }

  if (error) {
    return (
      <Typography color='error' variant='body2'>
        Error: {error.message}
      </Typography>
    );
  }
  return (
    <List>
      {comments.map((comment: Comment) => (
        <ListItem key={comment.id} disableGutters>
          <CommentCard comment={comment} />
        </ListItem>
      ))}
    </List>
  );
}
