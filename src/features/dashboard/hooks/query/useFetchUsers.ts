import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../../services/fetchUsers';
import type { UserQueryParams } from '../../types';

const useFetchUsers = (queryParams?: UserQueryParams) => {
  return useQuery({ queryKey: ['users', queryParams], queryFn: () => fetchUsers(queryParams) });
};

export default useFetchUsers;
