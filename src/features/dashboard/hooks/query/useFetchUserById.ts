import { useQuery } from '@tanstack/react-query';
import type { UserQueryParams } from '../../types';
import { fetchUserById } from '../../services/fetchUserById';

const useFetchUserById = (id: string, queryParams?: UserQueryParams) => {
  return useQuery({ queryKey: ['users', id], queryFn: () => fetchUserById(id, queryParams) });
};

export default useFetchUserById;
