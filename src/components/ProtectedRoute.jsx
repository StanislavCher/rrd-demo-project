import React from "react";
import { Route, Redirect, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../store/authSlice";
// function ProtectedRoute({ component: Component, children, ...rest }) {
function ProtectedRoute({ redirectTo = '/auth/login', element }) {
    const location = useLocation()
    // console.log(location)
    const isLoggedIn = useSelector(isLoggedInSelector());
    if (!isLoggedIn) return <>
            <Navigate to={ redirectTo } state={ { referrer: location} }/>
        </>
    // return children
    return element

    // return <>
    //     <Route element={isLoggedIn ? element: <Navigate to='/' /> } { ...rest }>s
    //         { children }
    //     </Route>
    // </>

    // return (
    //     <Route
    //         {...rest}
    //         render={(props) => {
    //             if (!isLoggedIn) {
    //                 return (
    //                     <Redirect
    //                         to={{
    //                             pathname: "/auth/login",
    //                             state: {
    //                                 referrer: props.location,
    //                             },
    //                         }}
    //                     />
    //                 );
    //             }
    //             return Component ? <Component {...props} /> : children;
    //         }}
    //     />
    // );
}
export default ProtectedRoute;
