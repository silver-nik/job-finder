import { useState, useEffect } from "react";
import ModalServices from "../modals/modal";

import './serviceCard.scss';

const ServiceCard = ({content}) => {

    const [isUnfold, setIsUnfold] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const closeModal = () => {
        setShowModal(false);
    }

    const formattingString = (str) => {
        return str.split('\n').map((line, index) => (
            <>
                {line}
                <br />
            </>
        ))
    }

    const setDate = (dt) => {
        const date = new Date(dt);

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        const formattedDate = `${day} ${months[monthIndex]} ${year}`;

        return formattedDate;
    }
    

    return (
        <div className="services__item-container">
            <div className="services-item">
                <h4 className="services-item__title">{content.title}</h4>
                <div className={`services-item__description`}>
                    {
                        isUnfold ? formattingString(content.description) : content.shortDescription
                    }
                </div>
                <a href="#" className="services-item__link-all" onClick={(e) => {
                    e.preventDefault();
                    setIsUnfold(!isUnfold)
                }}>{isUnfold ? 'fold' : 'unfold'}</a>
                <div className="services-item__near-date">
                    Nearest entry
                    <span className="near-date">
                        {
                            setDate(content.nearDate)
                        }
                    </span>
                </div>
                <div className="services-item__btns">
                    <button 
                        type='submit' 
                        className="button button__main"
                        disabled={''}
                        onClick={(e) => setShowModal(!showModal)}
                    >
                        <div className="inner">Choose a service</div>
                    </button>
                    <span>{content.price}$</span>
                </div>
            </div>
            {
                showModal ? <ModalServices showModal={showModal} closeModal={closeModal} content={content} formattingString={formattingString} /> : ''
            }
        </div>
    )
}

export default ServiceCard;
