import { Typography, Button } from '@mui/material';
import NoDecorationLink from '../components/NoDecorationLink';

export default function NotFound() {
  return (
    <>
      <Typography variant='h1' color='error' gutterBottom>
        404
      </Typography>
      <Typography variant='h6' color='textSecondary' paragraph>
        Page Not Found
      </Typography>
      <Button variant='contained' color='primary' component={NoDecorationLink} to='/'>
        Go to Home
      </Button>
    </>
  );
}
