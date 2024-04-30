import { useState, useEffect } from "react";
import ModalServices from "../modals/modal";


const ServiceCard = () => {

    const [isUnfold, setIsUnfold] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    }


    return (
        <div className="services__item-container">
            <div className="services-item">
                <h4 className="services-item__title">Career counseling</h4>
                <div className={`services-item__description ${isUnfold ? 'unfolded' : ''}`}>
                    What you get as a result:
                    1. We will analyze your current situation and develop a job search strategy exclusively for you.
                    2. We will formulate the name of the future position, which will characterize all your experience and expertise as accurately as possible.
                    3. Determine the level of income for which you can qualify.
                    4. We'll use multiple job search channels to maximize our "broad" view of the market.
                    5. You will get tips on how to quickly get to interviews and competently build a dialog with hr.
                    6. Learn to find jobs and companies that match your values and expectations.

                    Duration - 1 hour, format - video (google meet) or audio at your discretion.
                </div>
                <a href="#" className="services-item__link-all" onClick={(e) => {
                    e.preventDefault();
                    setIsUnfold(!isUnfold)
                }}>{isUnfold ? 'fold' : 'unfold'}</a>
                <div className="services-item__near-date">
                    Nearest entry
                    <span className="near-date">May 3, 2024</span>
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
                    <span>100$</span>
                </div>
            </div>
            {
                showModal ? <ModalServices showModal={showModal} closeModal={closeModal} /> : ''
            }
        </div>
    )
}

export default ServiceCard;
