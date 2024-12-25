import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../services/fetchPostsByUserId';
import { PostQueryParams } from '../../../types';
import { queryKeys } from '../../../queryKeys';

const useFetchPosts = (queryParams?: PostQueryParams) => {
  return useQuery({ queryKey: queryKeys.post('', queryParams?.userId), queryFn: () => fetchPosts(queryParams) });
};

export default useFetchPosts;
