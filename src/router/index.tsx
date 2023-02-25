import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Recommend from '@/pages/recommend';
import Singers from '@/pages/singers';
import Rank from '@/pages/rank';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Recommend />
      },
      {
        path: '/singers',
        element: <Singers />
      },
      {
        path: '/rank',
        element: <Rank />
      }
    ]
  },
  {
    path: '*',
    element: <>404</>
  }
]);
export default router;
