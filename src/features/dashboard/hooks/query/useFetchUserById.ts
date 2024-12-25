import { useQuery } from '@tanstack/react-query';
import type { UserQueryParams } from '../../../types';
import { fetchUserById } from '../../services/fetchUserById';
import { queryKeys } from '../../../queryKeys';

const useFetchUserById = (id: string, queryParams?: UserQueryParams) => {
  return useQuery({ queryKey: queryKeys.user(id), queryFn: () => fetchUserById(id, queryParams) });
};

export default useFetchUserById;
