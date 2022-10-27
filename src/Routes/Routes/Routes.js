import Main from "../../layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseCategory from "../../Pages/CourseCategory/CourseCategory";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import CoursePurchase from "../../Pages/CoursePurchase/CoursePurchase";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
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
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses',
                element: <CourseCategory></CourseCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },

            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/courses/${params.id}`)
                }
            },

            {
                path: '/coursePurchase',
                element: <PrivateRoutes><CoursePurchase></CoursePurchase></PrivateRoutes>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
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