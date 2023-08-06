import React from 'react';
import { Link } from 'react-router-dom';

export function ReactRouterExample() {
  return (
    <>
      <h1 className="text-xl font-semibold">🚏 React Router</h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
        <p>
          <span className="text-lg font-semibold">#1</span> To create routes and error pages, modify the router provided
          by ReactRouter in the <span className="rounded bg-gray-200 px-2 font-mono">main.tsx</span> file.
        </p>
        <p>
          <span className="text-lg font-semibold">#2</span> Try navigating to some routes:
          <div className="mt-2">
            <Link
              to={`some-public-route`}
              className="rounded bg-purple-300 px-2 font-mono text-purple-700"
              target="_blank" // Use these two lines to open in new tab
              rel="noopener noreferrer" //
            >
              /some-public-route
            </Link>
          </div>
          <div>
            <Link
              to={`some-private-route`}
              className="rounded bg-purple-300 px-2 font-mono text-purple-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              /some-private-route
            </Link>
          </div>
          <div>
            <Link
              to={`this-route-doesnt-exist`}
              className="rounded bg-purple-300 px-2 font-mono text-purple-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              /this-route-doesnt-exist
            </Link>
          </div>
        </p>
      </div>
    </>
  );
}
