import toCamelCase from '../../../utils/toCamelCase';
import type { PostResponse, Job } from '../../types';

export function transformJob(data: PostResponse): Job {
  return {
    id: data.id,
    userId: data.userId,
    title: toCamelCase(data.title),
    body: data.body,
    price: '$' + (Math.floor(Math.random() * 1000) + 100),
    rating: Math.floor(Math.random() * 5) + 1,
  };
}
