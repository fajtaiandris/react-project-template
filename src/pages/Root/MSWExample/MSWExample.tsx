import React, { useState } from 'react';

import { Post } from '@interfaces/post';

import { Button } from '@ui/Button';

export function MSWExample() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState<{ status: number; text: string } | null>(null);
  const [isFetchError, setIsFetchError] = useState<boolean>(false);

  const fetchPosts = async (fetchError?: boolean) => {
    setHttpError(null);
    setIsFetchError(false);
    setPosts([]);
    setIsLoading(true);
    await fetch(fetchError ? '/api/posts/?error=true' : '/api/posts')
      .then(async (res) => {
        if (res.ok) {
          setPosts((await res.json()) as Post[]);
        } else if (res.status === 400) {
          setHttpError({ status: res.status, text: res.statusText });
        }
      })
      .catch(() => setIsFetchError(true));

    setIsLoading(false);
  };

  return (
    <>
      <h1 className="text-xl font-semibold">👷 Mock Service Worker</h1>
      <div className="text-gray-600">
        <div className="py-4 text-base leading-7 ">
          <p>
            <span className="text-lg font-semibold">#1</span>
            {" During development, you probably want to mock your backend responses. That's what MSW is for."}
          </p>
          <p className="mt-2 mb-4 rounded bg-gray-50 p-2 font-mono text-sm font-semibold shadow">
            [MSW] Mocking enabled.
          </p>
          <p>When you see this in your console, you can be assured that it is running:</p>
        </div>
        <div className="pt-4 text-base leading-7">
          <p>
            <span className="text-lg font-semibold">#2</span> Try fetching:
          </p>
          <Button
            text="Posts"
            className="mt-2 mb-4"
            onClick={() => !isLoading && fetchPosts()}
            isDisabled={isLoading}
          />
          <Button
            text="Error"
            className="mt-2 ml-2 mb-4"
            onClick={() => !isLoading && fetchPosts(true)}
            isDisabled={isLoading}
          />
          {!!httpError && (
            <>
              <div className="mb-4 rounded bg-red-500 px-4 py-2 text-gray-100 shadow">
                <p className="font-semibold">⚠️ {httpError.status} </p>
                <p>{httpError.text}</p>
              </div>
              <div className="rounded bg-gray-100 px-4 py-2 shadow">
                <p className="font-semibold">🎉 Nice!</p>
                <p>
                  You have just handled a bad request error that you returned{' '}
                  <span className="italic">intentionally</span> from your mock.
                </p>
              </div>
            </>
          )}
          {isFetchError && (
            <div className="rounded bg-red-500 px-4 py-2 text-gray-100 shadow">
              <p className="font-semibold">⚠️ Your request failed </p>
              <p>Make sure that MSW is running and try again!</p>
            </div>
          )}
          {isLoading && (
            <article className="mb-4 animate-pulse rounded bg-purple-100 p-2 shadow">
              <h2 className="mb-2 h-6 w-2/5 rounded bg-purple-200"> </h2>
              <p className="h-6 w-10/12 rounded bg-purple-200"> </p>
            </article>
          )}
          {posts.length > 0 && (
            <>
              {posts.map((post) => (
                <article key={post.id} className="mb-4 rounded bg-purple-100 p-2 shadow">
                  <h2 className="font-semibold text-purple-700">{post.title}</h2>
                  <p className="text-gray-600">{post.body}</p>
                </article>
              ))}
              <div className="rounded bg-gray-100 px-4 py-2 shadow">
                <p className="font-semibold">🎉 Yaay! </p>
                <p>You have just intercepted an API request and returned your own mock with MSW!</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
