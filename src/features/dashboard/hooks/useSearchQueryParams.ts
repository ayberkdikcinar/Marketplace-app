import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { PostFilters } from '../../types';

export default function useSearchQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const term = (searchParams.get('term') as PostFilters['term']) || '';
  const minJob = Math.max(parseInt(searchParams.get('min_job_completed') as string), 0);
  const criteria = (searchParams.get('criteria') as PostFilters['criteria']) || 'name';

  const setFilters = useCallback((filters: PostFilters) => {
    setSearchParams((params) => {
      if (filters.criteria) {
        params.set('criteria', filters.criteria);
      } else {
        params.delete('criteria');
      }

      if (filters.term) {
        params.set('term', filters.term);
      } else {
        params.delete('term');
      }

      if (filters.minJob !== undefined && filters.minJob > 0) {
        params.set('min_job_completed', filters.minJob.toString());
      } else {
        params.delete('min_job_completed');
      }

      return params;
    });
  }, []);

  return {
    term,
    minJob,
    criteria,
    setFilters,
  };
}
