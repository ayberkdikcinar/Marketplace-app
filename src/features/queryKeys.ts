export const queryKeys = {
  user: (id: string = '') => ['users', id],
  post: (id: string = '', userId: string = '') => ['posts', id, userId],
  comment: (id: string = '', postId: string = '') => ['comments', id, postId],
};
