import { Card, CardContent, Typography } from '@mui/material';
import type { Comment } from '../../types';

type CommentCardProps = {
  comment: Comment;
};

export default function CommentCard({ comment }: CommentCardProps) {
  const { name, email, body } = comment;

  return (
    <Card sx={{ mb: 2, boxShadow: 0, borderRadius: 2, borderBottom: 1, borderColor: 'grey.300' }}>
      <CardContent>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='body1' color='text.secondary'>
          {email}
        </Typography>
        <Typography variant='body2' mt={1} color='text.secondary'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
