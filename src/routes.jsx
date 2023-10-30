// import React from "react";
import MainPage from "./pages/MainPage";
import AuthLayout from "./layouts/AuthLayout";
import { Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SigupPage";
// import ProtectedRoute from "./components/ProtectedRoute";
import PostsLayout from "./layouts/PostsLayout";
import PostsListPage from "./pages/Posts/PostsListPage";
import PostPage from "./pages/Posts/PostPage";

const routs = (isLoggedIn, location) => [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: '',
                element: <Navigate to='/auth/signup' />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'signup',
                element: <SignUpPage />
            },
            {
                path: '*',
                element: <Navigate to='/auth/signup' />
            }
        ]
    },
    {
        path: 'posts',
        element: isLoggedIn ? <PostsLayout/> : <Navigate to='/auth/login' state={{ referrer: location }} />,
            // <ProtectedRoute
            //     redirectTo={'/auth/login'}
            //     element={<PostsLayout/>}
            // />,
        children: [
            {
                path: '',
                element: <PostsListPage />
            },
            {
                path: ':postId',
                element: <PostPage />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to={ isLoggedIn ? 'posts' : '/'} />
    }
]

export default routs
