import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
