import type { User, UserResponse } from '../../types';
import { transformUser } from '../services/transformUser';

interface SearchResult {
  searchResults: User[];
}

type FilteredUsersProps = {
  data: UserResponse[];
  filters: {
    term?: string;
    criteria?: string;
    minJobCompleted?: number;
  };
};

export default function useFilteredUsers({ data, filters }: FilteredUsersProps): SearchResult {
  if (!data.length) {
    return {
      searchResults: [],
    };
  }

  const serialized = data.map((user) => transformUser(user));

  if (!filters.criteria || !(filters.criteria in serialized[0])) {
    return {
      searchResults: serialized,
    };
  }

  const result = serialized.filter((user) => {
    const criteraKey = filters.criteria as keyof User;
    if (filters.minJobCompleted && !(user['finished_job_count'] >= filters.minJobCompleted)) {
      return false;
    }
    if (typeof user[criteraKey] === 'string' && !user[criteraKey].toLowerCase().includes(filters.term!.toLowerCase())) {
      return false;
    }

    return true;
  });

  return {
    searchResults: result,
  };
}
