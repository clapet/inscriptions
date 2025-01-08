import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage = 'An error occurred';
  let title = 'Error';
  if (error.status === 404) {
    errorMessage = 'Not found';
    title = 'Could not find this page';
  }

  return (
    <div className='w-full max-w-2xl px-4 py-8'>
      <h1 className='text-2xl font-bold mb-12 text-center'>
        {title}
      </h1>
      <p className='text-center'>{errorMessage}</p>
    </div>
  );
}
