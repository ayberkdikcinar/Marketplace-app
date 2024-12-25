import type { User, UserResponse } from '../../types';

export function transformUser(data: UserResponse): User {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    phone: data.phone,
    photo: `https://randomuser.me/portraits/${data.id % 2 === 0 ? 'men' : 'women'}/${data.id}.jpg`,
    city: data.address.city,
    username: data.username,
    website: data.website,
    finished_job_count: data.posts?.length || 0,
  };
}
