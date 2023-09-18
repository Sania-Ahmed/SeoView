import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './Pages/MainPage.jsx';
import Home from './Pages/HomePage/Home';
import ReportPage from './Pages/ReportPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:'report',
        element:<ReportPage></ReportPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
)
