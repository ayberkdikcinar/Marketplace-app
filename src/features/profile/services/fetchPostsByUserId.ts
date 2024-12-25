import { ENPOINTS } from '../../../endpoints';
import type { PostQueryParams, PostResponse } from '../../types';

export async function fetchPosts(queryParams?: PostQueryParams): Promise<PostResponse[]> {
  const queryString = queryParams ? '?' + new URLSearchParams(queryParams as Record<string, string>).toString() : '';

  const response = await fetch(ENPOINTS.POSTS + queryString);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await response.json();
  return data;
}
