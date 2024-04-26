import { useState, useEffect } from "react";
import { useSearchParams, useParams } from 'react-router-dom';

import Services from "../../helpers/services";

import './singleBlogPage.scss';

const SingleBlogPage = () => {

    const newServices = new Services();

    const { id } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();
    const mentorId = searchParams.get("serviceId");

    const [mentor, setMentor] = useState({});

    useEffect(() => {
        newServices.getListPerformers('', id)
            .then(res => setMentor(res))
    }, [])
    

    return (
        <section className="mentor-page">
            <div className="mentor-page__container d-flex">
                <div className="mentor-page__descr">
                    <h1>{mentor.first_name} {mentor.last_name}</h1>
                    <span className="secondary-title">Сareer advisor</span>

                    <div className="mentor-page__about">
                        <span className="about-title">About me</span>
                        <div className="mentor-page__about-container">
                            <div className="about">
                                {mentor.description}
                            </div>
                        </div>
                    </div>

                    <div className="mentor-page__specialities">
                        <h6 className="specialities__title">
                            Specializations
                        </h6>
                        <div className="specialities__list">
                            <div className="specialities__tag-container">
                                <span className="specialities-tag">
                                    HR management, trainings
                                </span>
                            </div>
                            <div className="specialities__tag-container">
                                <span className="specialities-tag">
                                    Strategy, investments, consulting
                                </span>
                            </div>
                            <div className="specialities__tag-container">
                                <span className="specialities-tag">
                                    HR management, trainings
                                </span>
                            </div>
                            <div className="specialities__tag-container">
                                <span className="specialities-tag">
                                    Strategy, investments, consulting
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mentor-page__tasks">
                        <h6 className="tasks__title">
                            Tasks
                        </h6>
                        <div className="tasks__list">
                            <div className="tasks__tag-container">
                                <span className="tasks-tag">
                                    Create a strong resume
                                </span>
                            </div>
                            <div className="tasks__tag-container">
                                <span className="tasks-tag">
                                    Develop a job search strategy
                                </span>
                            </div>
                            <div className="tasks__tag-container">
                                <span className="tasks-tag">
                                    To get rid of imposter syndrome
                                </span>
                            </div>
                            <div className="tasks__tag-container">
                                <span className="tasks-tag">
                                    To get rid of imposter syndrome.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mentor-page__services">
                        <h3 className="services__title">
                            Services
                        </h3>
                        <div className="services__list">
                            <div className="services__item-container">
                                <div className="services-item">
                                    <h4 className="services-item__title">Career counseling</h4>
                                    <div className="services-item__description">
                                        What you get as a result:
                                        1. We will analyze your current situation and develop a job search strategy exclusively for you.
                                        2. We will formulate the name of the future position, which will characterize all your experience and expertise as accurately as possible.
                                        3. Determine the level of income for which you can qualify.
                                        4. We'll use multiple job search channels to maximize our "broad" view of the market.
                                        5. You will get tips on how to quickly get to interviews and competently build a dialog with hr.
                                        6. Learn to find jobs and companies that match your values and expectations.

                                        Duration - 1 hour, format - video (google meet) or audio at your discretion.
                                    </div>
                                    <div className="services-item__near-date">
                                        Nearest entry
                                        <span className="near-date">May 3, 2024</span>
                                    </div>
                                    <div className="services-item__btns">
                                        <button 
                                            type='submit' 
                                            className="button button__main"
                                            disabled={''}>
                                            <div className="inner">Choose a service</div>
                                        </button>
                                        <span>100$</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mentor-page__photo">
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                        loading="lazy"
                        alt=""
                    />
                    <button 
                        type='submit' 
                        className="button button__main"
                        disabled={''}>
                        <div className="inner">Choose a service</div>
                    </button>
                </div>
            </div>
        </section>
    )

}

export default SingleBlogPage