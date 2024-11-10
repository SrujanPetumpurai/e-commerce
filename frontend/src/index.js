import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import ShopCategory from './Pages/ShopCategory';
import Product from  './Pages/Product'
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import Signup from './Pages/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [  
    {
      path:'/',
      element:<NavBar/>,
      children:[
        {
          path:'/',
          element:<Shop/>
        },
        {
          path:'/men',
          element:<ShopCategory />
        },
        {
          path:'/kid',
          element:<ShopCategory />
        },
        {
          path:'/women',
          element:<ShopCategory />
        },
        {
          path:'/product/:id',
          element:<Product/>
        },
        {
          path:'/login',
          element:<LoginSignup/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/signup',
          element:<Signup/>
        }
      ]
    }
   ]
)

root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
