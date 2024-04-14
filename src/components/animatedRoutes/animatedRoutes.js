import {lazy} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';

// const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/mainPage/mainPage'));
const SearchPage = lazy(() => import('../pages/searchPage/searchPage'));

// const ComicsPage = lazy(() => import('../pages/ComicsPage'));
// const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
// const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));

// const SinglePage = lazy(() => import('../pages/SinglePage'));


const AnimatedRoutes = () => {
    const location = useLocation();
  
    return (
    //   <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location} >

            <Route path="/" element={<MainPage/>} className='page'/>
            {/* {/* <Route path="/comics" element={<ComicsPage/>} className='page' /> */}
            
            {/* <Route path="/search/vacancy/:text/:area" element={<SearchPage/>} className='page' /> */}
            <Route path="/search/vacancy" element={<SearchPage/>} className='page' />
            {/* <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
            <Route path="*" element={<Page404/>}/>
            <Route path="404" element={<Page404/>}/> */}

        </Routes>
    //   </AnimatePresence>
    );
  };

  export default AnimatedRoutes;