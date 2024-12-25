import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../../services/fetchUsers';
import type { UserQueryParams } from '../../../types';
import { queryKeys } from '../../../queryKeys';

const useFetchUsers = (queryParams?: UserQueryParams) => {
  return useQuery({ queryKey: queryKeys.user(queryParams?.id), queryFn: () => fetchUsers(queryParams) });
};

export default useFetchUsers;
