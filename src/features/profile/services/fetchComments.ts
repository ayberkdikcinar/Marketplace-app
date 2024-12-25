import { ENPOINTS } from '../../../endpoints';
import type { CommentQueryParams, Comment } from '../../types';

export async function fetchComments(queryParams?: CommentQueryParams): Promise<Comment[]> {
  const queryString = queryParams ? '?' + new URLSearchParams(queryParams as Record<string, string>).toString() : '';

  const response = await fetch(ENPOINTS.COMMENTS + queryString);
  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }
  const data = await response.json();
  return data;
}
