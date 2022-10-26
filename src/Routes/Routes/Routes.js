import Main from "../../layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import BlankRoutes from "../BlankRoutes/BlankRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]
    },
    {
        path: '/*',
        element: <BlankRoutes></BlankRoutes>
    }
]);