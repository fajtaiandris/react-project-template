import { useQuery } from '@tanstack/react-query';

import { Post } from '../interfaces/post';

function usePostsQuery() {
  return useQuery<Array<Post>, Error>(
    ['posts'],
    async () => {
      const response = await fetch('/api/posts');
      const posts: Post[] = await response.json();
      return posts;
    },
    {
      enabled: false, // disable this query from automatically running
      refetchOnWindowFocus: false,
    },
  );
}

export default usePostsQuery;
