    import { useState, useEffect } from "react";

    import Services from "../../helpers/services";

    import './loginPage.scss';
    import '../../searchForm/searchForm.scss';

    import {Formik, Form, Field} from 'formik';
    import * as Yup from 'yup';
    import { useNavigate } from "react-router-dom";


    const LoginPage = () => {

        const [userData, setUserData] = useState({});
        const [authByCode, setAuthByCode] = useState(true);
        const [nextStep, setNextStep] = useState(false);

        const navigate = useNavigate();

        const validateEmailOrPhone = (value) => {
            let error;
            if (!value) {
                error = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) && !/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/.test(value)) {
                error = 'Invalid email address or phone number';
            }
            return error;
        }
        
        const validatePwd = (value) => {
            let error;
            if (value === 'admin') {
            error = 'Nice try!';
            } else if (!value) {
                error = 'Required';
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
                error = 'Invalid password. the password must contain one lowercase letter, one uppercase letter, one digit and one of the specified special characters (@$!%*?&), and be at least 8 characters long';
            }
            return error;
        }

        const validateCode = (value) => {
            const codeDefault = '230089';

            let error;
            if (!value) {
                error = 'Required';
            } else if (value !== codeDefault) {
                error = 'Invalid code';
            }
            return error;
        }

        return (
            <section className="login-page">
                <div className="form-search">
                <Formik
                    initialValues = {{
                        login: '',
                        pwd: '',
                        code: ''
                    }}

                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched, isValidating, validateForm, validateField }) => (
                    <Form>
                        <div className='search-header'>
                            <span className='search-title'>Search for a job</span>
                        </div>
                        { !nextStep ?
                            <div className="search-wrapper">
                            <Field 
                                id="login" 
                                name='login' 
                                type='text' 
                                onInput={
                                    (e) => {
                                        setUserData((prev) => ({
                                            ...prev,
                                            login: e.target.value
                                        }))
                                    }
                                }
                                validate={validateEmailOrPhone}
                                placeholder="email or phone number"/>
                                {errors.login && touched.login && <div>{errors.login}</div>}
                                {!authByCode ?  
                                    <>
                                        <Field 
                                            id="pwd" 
                                            name='pwd' 
                                            type='text' 
                                            onInput={(e) => {
                                                setUserData((prev) => ({
                                                    ...prev,
                                                    pwd: e.target.value
                                                }))
                                            }}
                                            validate={validatePwd}
                                            placeholder="Password"/>
                                        {errors.pwd && touched.pwd && <div>{errors.pwd}</div>}
                                    </> : ''
                                }
                            <button 
                                type='submit' 
                                className="button button__main"
                                onClick={() => {
    
                                    validateForm()
                                        .then(errors => {
                                            if(!errors.login && !errors.pwd) {
                                                
                                                if(authByCode)  {
                                                    setNextStep(true)
                                                    console.log('you are going to next step');
                                                } else {
                                                    setNextStep(false)
                                                    console.log('you are login');
                                                    navigate("/blog");
                                                }

                                            }
                                        })

                                }}
                            >
                                <div className="inner">
                                {
                                    authByCode ? 'continue' : 'login'
                                }
                                </div>
                            </button>
                            <a href="#" className="swap-enter__btn" onClick={(e) => setAuthByCode(!authByCode)}>
                                {
                                    authByCode ? 'enter by password' : 'enter by code'
                                }
                            </a>
                            </div> :
                            <div className="search-wrapper">
                                {authByCode && nextStep ?  
                                    <>
                                        <Field 
                                            id="code" 
                                            name='code' 
                                            type='text' 
                                            onInput={(e) => {
                                                setUserData((prev) => ({
                                                    ...prev,
                                                    code: e.target.value
                                                }))
                                            }}
                                            validate={validateCode}
                                            placeholder="Code input"/>
                                        {errors.code && touched.code && <div>{errors.code}</div>}
                                    </> : ''
                                }
                                <button 
                                    type='submit' 
                                    className="button button__main"
                                    onClick={() => {
                                        validateField('code')
                                            .then(error => {
                                                if(!error) {
                                                    console.log('you are login');
                                                    localStorage.setItem('id', 6242)
                                                    navigate(`/user/settings`);
                                                }
                                            })
                                    }}
                                >
                                    <div className="inner">
                                        Accept
                                    </div>
                                </button>
                            </div>
                        }
                        <div className="search-form__background"></div>
                    </Form>
                    )}
                </Formik>
            </div>
            </section>
        )
    }

    export default LoginPage;