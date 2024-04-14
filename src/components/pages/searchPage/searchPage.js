import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import TuneIcon from '@mui/icons-material/Tune';

import Services from "../../helpers/services";

import VacanyCard from "../../vacancyCard/vacancyCard";

import './searchPage.scss';

const SearchPage = () => {

    const [searchParams] = useSearchParams();
    const searchTypeParam = searchParams.get("type");
    const searchLocationParam = searchParams.get("location"); 

    useEffect(() => {
        console.log(searchTypeParam);
        console.log(searchLocationParam);
    }, []);


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
                    inputProps={{
                        autoComplete: 'off',
                        ariaLabel: 'Profession, job or company',
                    }}
                />
                <Button variant="contained" color="primary" sx={{width: { xs: '100%', sm: '25ch' } }}>
                    Find it
                </Button>
                <Button aria-label="tune" color="primary" variant="outlined">
                    <TuneIcon />
                </Button>
            </Stack>
            </div>
            <div className="search-page__wrapepr">
                <div className="search-page__list">

                    <VacanyCard/>

                </div>
            </div>
        </section>
    )

}

export default SearchPage;