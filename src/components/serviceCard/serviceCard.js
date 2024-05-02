import { useState, useEffect } from "react";
import ModalServices from "../modals/modal";

import ContentFormmating from "../helpers/contentFormmating";
import './serviceCard.scss';

const ServiceCard = ({index, content}) => {

    const [isUnfold, setIsUnfold] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const contentFormat = new ContentFormmating();

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="services__item-container" key={index}>
            <div className="services-item">
                <h4 className="services-item__title">{content.title}</h4>
                <div className={`services-item__description`}>
                    {
                        isUnfold ? contentFormat.formattingString(content.description) : content.shortDescription
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
                            contentFormat.formattingDate(content.nearDate)
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
                showModal ? <ModalServices showModal={showModal} closeModal={closeModal} content={content} /> : ''
            }
        </div>
    )
}

export default ServiceCard;
