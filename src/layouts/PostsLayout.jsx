import React, { useEffect } from "react";
// Librares
import { useDispatch } from "react-redux";
import {Route, Routes, Outlet, useParams} from "react-router-dom";
// Components
import BackgroundGradiend from "../components/BackgroundGradient";
import ScreenWidthWrapper from "../components/ScreenWidthWrapper";
// Pages
// import PostPage from "../pages/Posts/PostPage";
// import PostsListPage from "../pages/Posts/PostsListPage";
//Store
import { getPosts } from "../store/postsSlice";

const PostsLayout = ({ children }) => {
    const dispatch = useDispatch();
    const params = useParams()
    // console.log(params)

    useEffect(() => {
        const loadPostData = () => {
            dispatch(getPosts());
        };
        loadPostData();
    }, [dispatch]);

    // let { path } = useRouteMatch();
    return (
        <>
            <BackgroundGradiend />
            <ScreenWidthWrapper>
                <Outlet />
                {/*<Routes>*/}
                {/*    <Route path={":postId"} element={<PostPage/>} />*/}
                {/*    <Route path={""} element={<PostsListPage/>} />*/}
                {/*</Routes>*/}
                {/*{children}*/}
            </ScreenWidthWrapper>
        </>
    );
};

export default PostsLayout;
