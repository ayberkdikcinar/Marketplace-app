import { Box } from '@mui/material';
import type { User } from '../../types';
import InformationPair from '../../../components/InformationPair';

type ProfileInfoProps = {
  user?: User;
};

export default function UserDetails({ user }: ProfileInfoProps) {
  if (!user) return null;
  const { email, phone, city, website, username } = user;

  return (
    <Box
      sx={{
        minWidth: 200,
        padding: 2,
        borderRadius: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'grey.300',
      }}
    >
      <InformationPair label='Email' value={email} />
      <InformationPair label='Username' value={username} />
      <InformationPair label='Phone' value={phone} />
      <InformationPair label='Website' value={website} />
      <InformationPair label='City' value={city} />
    </Box>
  );
}
