import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import ShopCategory from './Components/ShopCategory';
import Product from './Components/Product';
import Card from './Components/Card';
import LoginSignup from './Components/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_womens.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Authentication from './Components/Context';

const Layout = () => {
    return (
        <Authentication>
            <Navbar />
            <Outlet />
            <Footer />
        </Authentication>
    );
};

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Shop />
                },
                {
                    path: "category/kids",
                    element: <ShopCategory banner={kid_banner} category='kid' />
                },
                {
                    path: "category/mens",
                    element: <ShopCategory banner={men_banner} category='men' />
                },
                {
                    path: "category/womens",
                    element: <ShopCategory banner={women_banner} category='women' />
                },
                {
                    path: "product/:productId",
                    element: <Product />
                },
                {
                    path: "card",
                    element: <Card />
                },
                {
                    path: "loginsignup",
                    element: <LoginSignup />
                },
                {
                    path: "register",
                    element: <Register />
                },
                {
                    path: "profile",
                    element: <Profile />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={routes} />
    );
}

export default App;
