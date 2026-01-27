import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './Layoutes/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import NotFoundPage from './Components/Error/Error_404.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  errorElement:<NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/", element: <Home></Home>
     }
   ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
