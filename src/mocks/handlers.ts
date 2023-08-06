import { rest } from 'msw';

const mockPosts = [
  {
    body: 'Some interesting facts',
    id: 1,
    title: 'Mock Post #1',
    userId: 1,
  },
  {
    body: 'Some facts, but not so interesting',
    id: 2,
    title: 'Mock Post #2',
    userId: 1,
  },
];

export const handlers = [
  rest.get('/api/posts', (req, res, ctx) => {
    const isError = req.url.searchParams.get('error');
    if (isError === 'true') {
      return res(ctx.delay(1000), ctx.status(400));
    }
    return res(ctx.delay(2600), ctx.status(200), ctx.json(mockPosts));
  }),
];
