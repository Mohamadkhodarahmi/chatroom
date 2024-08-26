import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import 'bootstrap';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./Index.jsx";
import Login from "./auth/login.jsx";
import Register from "./auth/register.jsx";

import axios from "axios";
import Dashboard from "./auth/dashboard.jsx";
const route = import.meta.env.VITE_API_URL;
console.log(route)
    // axios.post(route+'register',{
    //     name : 'reza',
    //     username : 'atomas',
    //     email : 'rezaag@gmail.com',
    //     password : '123456'
    // })
const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>,

    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
