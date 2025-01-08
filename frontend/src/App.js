import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from './pages/HomePage';
import InscriptionPage, { inscriptionLoader } from './pages/InscriptionPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'address/:addressId/inscriptions/:inscriptionId',
        id: 'inscription',
        element: <InscriptionPage />,
        loader: inscriptionLoader,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className='min-h-screen bg-black text-white flex justify-center'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
