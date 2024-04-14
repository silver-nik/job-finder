import { useState, useEffect, useRef, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Formik, Form, Field, ErrorMessage as FormikErrorMessage} from 'formik';
import * as Yup from 'yup';

import './searchForm.scss';
import { Link } from 'react-router-dom';

const options = [
    { label: "", value: "all" },
    { label: "Computer Programmer", value: "Computer_programmer" },
    { label: "Web Developer", value: "web_developer" },
    { label: "User Experience Designer", value: "user_experience_designer" },
    { label: "Systems Analyst", value: "systems_analyst" },
    { label: "Quality Assurance Tester", value: "quality_assurance_tester" },
]

const FormSearch = () => {

    const [searchRequest, setSearchRequest] = useState('all');
    const [searchLoaction, setSearchLocation] = useState(options[0]);


    return (
        <div className="form-search">
            <Formik
                initialValues = {{
                    jobRequest: '',
                    jobLocation: ''
                }}
                validationSchema = {Yup.object({
                    jobRequest: Yup.string().required('This field is required'),
                })}
                onSubmit = { ({jobRequest}) => {
                    setSearchRequest(jobRequest);
                }}
            >
                <Form>
                    <div className='search-header'>
                        <span className='search-title'>Search for a job</span>
                        <span className='search-text'>Search millions of jobs. Do meaningful work that impacts the world</span>
                    </div>
                    <div className="search-wrapper">
                        <Field 
                            id="jobRequest" 
                            name='jobRequest' 
                            type='text' 
                            onInput={
                                (e) => {
                                    setSearchRequest(e.target.value);
                                }
                            }
                            placeholder="Job title or keyword"/>
                        <Autocomplete
                            value={searchLoaction}
                            onChange={(event, newValue) => {
                                setSearchLocation(newValue);
                            }}
                            id="controllable-states-demo jobLocation"
                            name="jobLocation"
                            options={options}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Location" />}
                        />
                        <Link to={`/search/vacancy?type=${searchRequest}&location=${searchLoaction.value}`}>
                            <button 
                                type='submit' 
                                className="button button__main"
                                disabled={''}>
                                <div className="inner">Search</div>
                            </button>
                        </Link>
                    </div>
                    <div className="search-form__background"></div>
                </Form>
            </Formik>
        </div>
    )
}

export default FormSearch;