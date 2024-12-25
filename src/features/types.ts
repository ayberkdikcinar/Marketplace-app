interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
  city: string;
  website: string;
  username: string;
  finished_job_count: number;
}

interface UserResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
  };
  website: string;
  username: string;
  posts?: PostResponse[];
}

interface PostResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Job {
  id: number;
  title: string;
  body: string;
  userId: number;
  rating: number;
  price: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface UserQueryParams {
  id?: string;
  _embed?: string;
}

interface PostQueryParams {
  userId?: string;
  _embed?: string;
}

interface CommentQueryParams {
  postId?: string;
}

export type { User, Job, Comment, UserResponse, PostResponse, UserQueryParams, PostQueryParams, CommentQueryParams };
