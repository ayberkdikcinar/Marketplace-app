import { useQuery } from '@tanstack/react-query';
import { CommentQueryParams } from '../../../types';
import { fetchComments } from '../../services/fetchComments';
import { queryKeys } from '../../../queryKeys';

const useFetchPosts = (queryParams?: CommentQueryParams) => {
  return useQuery({ queryKey: queryKeys.comment('', queryParams?.postId), queryFn: () => fetchComments(queryParams) });
};

export default useFetchPosts;
