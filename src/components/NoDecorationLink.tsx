import { Link } from 'react-router';
import { styled } from '@mui/material/styles';

const NoDecorationLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: 'inherit',
  },
});

export default NoDecorationLink;
