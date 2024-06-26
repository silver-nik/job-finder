import { useState, useEffect } from "react";
import { useSearchParams, useParams } from 'react-router-dom';

import Services from "../../helpers/services";
import ModalServices from "../../modals/modal";

import './singleBlogPage.scss';
import ServiceCard from "../../serviceCard/serviceCard";

const SingleBlogPage = () => {

    const newServices = new Services();

    const { id } = useParams();

    const [mentor, setMentor] = useState({});
    const [mentorServices, setMentorServices] = useState({});
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        newServices.getListPerformers('', id)
            .then(res => setMentor(res))

        newServices.getListServices(id)
            .then(res => setMentorServices(res))
    }, [])

    const closeModal = () => {
        setShowModal(false);
    }

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
                            {
                                mentorServices.length > 0 ? mentorServices.map((el, index) => <ServiceCard key={index} index={index} content={el}/>) : ''
                            }
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
                        disabled={''}
                        onClick={(e) => setShowModal(!showModal)}
                    >
                        <div className="inner">Choose a services</div>
                    </button>
                </div>
            </div>
            {
                showModal ? <ModalServices showModal={showModal} closeModal={closeModal} content={mentorServices} /> : ''
            }
        </section>
    )

}

export default SingleBlogPage