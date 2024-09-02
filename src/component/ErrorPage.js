import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-700">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg">An unexpected error has occurred.</p>
      {error?.statusText || error?.message ? (
        <p className="mt-4 text-sm text-red-500">
          {error.statusText || error.message}
        </p>
      ) : null}
    </div>
  );
};

export default ErrorPage;
