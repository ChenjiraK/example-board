import React, { useEffect } from 'react';
import { useRoutes, useLocation, RouteObject } from 'react-router-dom';
/** pages */
import Home from '../pages/Home.tsx';
import OurBlog from '../pages/OurBlog.tsx';
import Login from '../pages/Login.tsx';
import CommentDetails from '../pages/CommentDetails.tsx';
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/our-blog',
    element: <OurBlog />,
  },
  {
    path: '/detail/:id',
    element: <CommentDetails />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

const Routes: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const routing = useRoutes(routes);
  return routing;
};

export default Routes;
