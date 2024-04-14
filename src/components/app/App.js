import {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import '../../../src/scss/config/base.scss';
import './App.scss';

import AnimatedRoutes from '../animatedRoutes/animatedRoutes';


const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>

                    <Suspense>

                        <AnimatedRoutes/>

                    </Suspense>

                </main>
            </div>
        </Router>
    )
}

export default App;