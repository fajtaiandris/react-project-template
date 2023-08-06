import { useQueryClient } from '@tanstack/react-query';
import React from 'react';

import usePostsQuery from '@queries/usePostsQuery';

import { Button } from '@ui/Button';

export function TanstackQueryExample() {
  const { isError, isFetching, data: posts, refetch } = usePostsQuery();
  const queryClient = useQueryClient();

  return (
    <>
      <h1 className="text-xl font-semibold">🌺 TanStack Query</h1>
      <div className="text-gray-600">
        <div className="pt-4 text-base leading-7">
          <p>
            <span className="text-lg font-semibold">#1</span> Handling fetched data as global state can be tricky, but
            look how easy it gets with TanStack Query:
          </p>
          <Button text="FetchPosts" className="mt-2" isDisabled={isFetching} onClick={() => refetch()} />
          {isError && (
            <div className="mt-4 rounded bg-red-500 px-4 py-2 text-gray-100 shadow">
              <p className="font-semibold">⚠️ Your request failed </p>
              <p>Make sure that MSW is running and try again!</p>
            </div>
          )}
          {isFetching && (
            <article className="my-4 animate-pulse rounded bg-purple-100 p-2 shadow">
              <h2 className="mb-2 h-6 w-2/5 rounded bg-purple-200"> </h2>
              <p className="h-6 w-10/12 rounded bg-purple-200"> </p>
            </article>
          )}
          {!isFetching && !!posts?.length && (
            <div className="mt-4">
              {posts.map((post) => (
                <article key={post.id} className="mb-4 rounded bg-purple-100 p-2 shadow">
                  <h2 className="font-semibold text-purple-700">{post.title}</h2>
                  <p className="text-gray-600">{post.body}</p>
                </article>
              ))}
              <div className="rounded bg-gray-100 px-4 py-2 shadow">
                <p className="font-semibold">🎉 Congrats! </p>
                <p>
                  You have just fetched data and saved it in the store. You can fetch it again or make it disappear by
                  invalidating it.
                </p>
                <Button
                  text="Invalidate posts"
                  variant="secondary"
                  className="mt-2 mb-2"
                  onClick={() => queryClient.resetQueries({ queryKey: ['posts'] })}
                />
              </div>
            </div>
          )}
          <p className="mt-8">
            <span className="text-lg font-semibold">#2</span> To make things even easier, TanStack Query comes with a
            cool devtool. Click on the red flower in the bottom left corner to open it.
          </p>
        </div>
      </div>
    </>
  );
}
