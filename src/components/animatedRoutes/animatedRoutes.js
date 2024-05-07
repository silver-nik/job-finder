import {lazy} from 'react';
import React, { createContext, useState, useContext } from 'react';
import {Route, Routes, useLocation, Outlet, Navigate} from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';

// const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/mainPage/mainPage'));
const SearchPage = lazy(() => import('../pages/searchPage/searchPage'));
const BlogPage = lazy(() => import('../pages/blogPage/blogPage'));
const SingleBlogPage = lazy(() => import('../pages/singleBlogPage/singleBlogPage'));
const LoginPage = lazy(() => import('../pages/loginPage/loginPage'));
const UserPage = lazy(() => import('../pages/userPage/userPage'));





// const ComicsPage = lazy(() => import('../pages/ComicsPage'));
// const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
// const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));

// const SinglePage = lazy(() => import('../pages/SinglePage'));

const AnimatedRoutes = () => {
    const location = useLocation();

    const RoleAccess = ({ roles = [] }) => {

        const user = 'user';
        // const user = JSON.parse(localStorage.getItem("userInfo"));
        // return !roles.length || roles.includes(user?.role)
        return !roles.length || roles.includes(user)
          ? <Outlet />
          : 'You havent permisssions';
    };
  
    return (
    //   <AnimatePresence mode="wait">
        
            <Routes key={location.pathname} location={location} >

            <Route path="/" element={<MainPage/>} className='page'/>
            <Route path="/login" element={<LoginPage/>} className='page' />

            <Route element={<RoleAccess roles={["user", "admin"]} />}>
                <Route path="/blog" element={<BlogPage />} />
            </Route>

            <Route element={<RoleAccess roles={["user", "admin"]} />}>
                <Route path="/user/settings" element={<UserPage />} />
            </Route>

            <Route path="*" element={<div>Not page</div>}/>
            <Route path="404" element={<div>Not page</div>}/>

            {/* <Route path="/search/vacancy/:text/:area" element={<SearchPage/>} className='page' /> */}
            <Route path="/blog/:id" element={<SingleBlogPage/>} className='page' />
            {/* <Route path="/blog" element={<BlogPage/>} className='page' /> */}
            <Route path="/search/vacancy" element={<SearchPage/>} className='page' />
            {/* <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
            // <Route path="*" element={<Page404/>}/>
            <Route path="404" element={<Page404/>}/> */}

            </Routes>
        
    //   </AnimatePresence>
    );
  };

  export default AnimatedRoutes;