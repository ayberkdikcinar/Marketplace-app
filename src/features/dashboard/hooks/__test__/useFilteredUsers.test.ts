import { describe, it, expect } from 'vitest';
import useFilteredUsers from '../useFilteredUsers';
import type { UserResponse } from '../../../types';

const mockUsers: UserResponse[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: { city: 'New York' },
    website: 'https://example.com',
    username: 'john_doe',
    posts: [{ id: 1, title: 'Post 1', body: 'Body 1', userId: 1 }],
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
    address: { city: 'Los Angeles' },
    website: 'https://example.org',
    username: 'jane_smith',
    posts: [{ id: 2, title: 'Post 2', body: 'Body 2', userId: 2 }],
  },
];

describe('useFilteredUsers', () => {
  it('should return all users when no filters are applied', () => {
    const { searchResults } = useFilteredUsers({ data: mockUsers, filters: {} });
    expect(searchResults).toHaveLength(2);
  });

  it('should filter users by name', () => {
    const { searchResults } = useFilteredUsers({ data: mockUsers, filters: { term: 'John', criteria: 'name' } });
    expect(searchResults).toHaveLength(1);
    expect(searchResults[0].name).toBe('John Doe');
  });

  it('should filter users by city', () => {
    const { searchResults } = useFilteredUsers({ data: mockUsers, filters: { term: 'Los Angeles', criteria: 'city' } });
    expect(searchResults).toHaveLength(1);
    expect(searchResults[0].city).toBe('Los Angeles');
  });

  it('should filter users by minimum job count', () => {
    const { searchResults } = useFilteredUsers({ data: mockUsers, filters: { minJobCompleted: 1 } });
    expect(searchResults).toHaveLength(2);
  });

  it('should return no users if no match is found', () => {
    const { searchResults } = useFilteredUsers({ data: mockUsers, filters: { term: 'Nonexistent', criteria: 'name' } });
    expect(searchResults).toHaveLength(0);
  });

  it('should filter users by name and minimum job count', () => {
    const { searchResults } = useFilteredUsers({
      data: mockUsers,
      filters: { term: 'Jane', criteria: 'name', minJobCompleted: 1 },
    });
    expect(searchResults).toHaveLength(1);
    expect(searchResults[0].name).toBe('Jane Smith');
  });
});
