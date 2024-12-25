import { ENPOINTS } from '../../../endpoints';
import type { UserResponse } from '../../types';
import type { UserQueryParams } from '../types';
export async function fetchUserById(id: string, queryParams?: UserQueryParams): Promise<UserResponse> {
  const queryString = queryParams ? '?' + new URLSearchParams(queryParams as Record<string, string>).toString() : '';
  const response = await fetch(`${ENPOINTS.USERS}/${id}${queryString}`);

  if (!response.ok) {
    throw new Error('Failed to fetch user with id ' + id);
  }
  const data = await response.json();
  return data;
}
