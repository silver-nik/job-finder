import { useState, useEffect } from "react";

import FormSearch from "../../searchForm/searchForm";

import './mainPage.scss';

const MainPage = () => {

    const [searchInput, setSearchInput] = useState('');
    const [searchLocation, setSearchLocation] = useState('');

    useEffect(() => {
        console.log('render2')
    }, [])

    return (
        <section className="main-page d-flex">
            <div className="main-page__title-block w-50">
                <h1><span className="title-block__title">JobFinder</span> helps find work. Remote-friendly</h1>
                <span>Don't just change job. Transform your career. Start your journey today</span>
            </div>
            <div className="main-page__form-block w-50">
                <FormSearch/>
            </div>
        </section>
    )

}

export default MainPage;