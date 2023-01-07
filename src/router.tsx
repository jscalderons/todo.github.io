import { createBrowserRouter } from 'react-router-dom';

import Root from './containers/layouts/Root';
import { ErrorPage } from './containers/pages/Error';
import { HomePage } from './containers/pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },    
    ],
  },
]);

export { router };
