import Main from "../../layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Register from "../../Pages/Register/Register";
import BlankRoutes from "../BlankRoutes/BlankRoutes";

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
            }
        ]
    },
    {
        path: '/*',
        element: <BlankRoutes></BlankRoutes>
    }
]);