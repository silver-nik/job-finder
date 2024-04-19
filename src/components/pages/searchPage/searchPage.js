import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import TuneIcon from '@mui/icons-material/Tune';

import Services from "../../helpers/services";

import FilterBlock from "../../filterBlock/filterBlock";
import VacanyCard from "../../vacancyCard/vacancyCard";

import './searchPage.scss';

const SearchPage = () => {

    const newServices = new Services();

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTypeParam = searchParams.get("title_like");
    const searchLocationParam = searchParams.get("location_like"); 

    const [arr, setArr] = useState([]);
    const [filters, setFilters] = useState([]);

    const [searchInput, setSearchInput] = useState('');
    const [searchFilters, setSearchFilters] = useState({
        location: '',
        employment_type: ''
    })


    useEffect(() => {

        searchTypeParam ? getVacancyByRequest(searchTypeParam, searchLocationParam) : getVacancyByRequest('');

        getAllFilters();

    
    }, []);

    
    const getVacancyByRequest = (title = '', location = '', employment = '') => {
        newServices.getAllVacany(title, location, employment).then(res => {
            setArr(res);
        })

        setSearchInput(title);

        setSearchParams({ 
            title_like: title, 
            location_like: searchFilters.location, 
            employment_type_like: searchFilters.employment_type 
        });
    }

    const getAllFilters = () => {
        newServices.getFilters().then(res => {
            setFilters(res);
        })
    }

    const updateSearchFilters = (newFilters) => {
        setSearchFilters(prevFilters => ({
            ...prevFilters,
            ...newFilters
        }));
    };
    

    return (
        <section className="search-page d-flex f-column">
            <div className="search-page__search">
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignSelf="center"
                spacing={1}
                useFlexGap
                sx={{width: { xs: '100%', sm: '100%' } }}
            >
                <TextField
                    id="outlined-basic"
                    sx={{width: '100%' }}
                    hiddenLabel
                    size="small"
                    variant="outlined"
                    aria-label="Profession, job or company"
                    placeholder="Profession, job or company"
                    value={searchInput}
                    onInput={(e) => setSearchInput(e.target.value)}
                    inputProps={{
                        autoComplete: 'off',
                        ariaLabel: 'Profession, job or company',
                    }}
                />
                <Button variant="contained" color="primary" sx={{width: { xs: '100%', sm: '25ch' } }} onClick={() => getVacancyByRequest(searchInput, searchFilters.location, searchFilters.employment_type)}>
                    Find it
                </Button>
                <Button aria-label="tune" color="primary" variant="outlined">
                    <TuneIcon />
                </Button>
            </Stack>
            </div>
            <div className="search-page__wrapper d-flex">
                <div className="search-page__filters">

                {
                 
                    filters ? filters.map((filter) => {
                        return <FilterBlock title={filter.title} options={filter.options} titleName={filter.titleName} updateSearchFilters={updateSearchFilters} />
                    }) : null
                    
                }
                
                </div>
                <div className="search-page__list">

                {
                    arr && arr.length > 0 ? arr.map(item => {
                        return <VacanyCard id={item.id} title={item.title} description={item.description} location={item.location} time={item.employment_type} />
                    }) : `Sorry, we haven't vacancies`
                }

                {
                    <div className="">
                        <button className="search-page__list__load-btn" onClick={(e) => {
                            e.preventDefault();

                            // if() {

                            // }

                        }}>load more</button>
                    </div>
                }

                </div>
            </div>
        </section>
    )

}

export default SearchPage;