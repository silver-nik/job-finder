import { useState, useEffect } from "react";
import { useSearchParams, useParams } from 'react-router-dom';

// import Services from "../../helpers/services";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './modal.scss';
import ContentFormmating from "../helpers/contentFormmating";

const ModalServices = ({showModal, closeModal, content}) => {

    const [isArray, setIsArray] = useState(false);
    const [expanded, setExpanded] = useState(0);
    const [expandedPromocode, setExpandedPromocode] = useState(false);
    const [currentService, setCurrentService] = useState({});
    const [promocode, setPromocode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);

    const contentFormat = new ContentFormmating();

    useEffect(() => {

        if (Array.isArray(content)) {
            setIsArray(true);
            setCurrentService(content[0]);
        } else {
            setIsArray(false);
        }

    }, []);

    const handleChange = (panel, item) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);

        newExpanded ? setCurrentService(item) : setCurrentService({});
    };

    const setFragment = (item, index) => {
        return  <Accordion 
                    expanded={
                        expanded === index
                    } 
                    className="panel"
                    onChange={handleChange(index, item)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <div className="d-flex title__wrapper">
                            <h4 className="title">{item.title}</h4>
                            <span>{item.price}$</span>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={`description__wrapper`}>
                            {
                                contentFormat.formattingString(item.description)
                            }
                        </div>
                        <div className="near-date__wrapper">
                            Nearest entry
                            <span className="near-date">
                                {
                                    contentFormat.formattingDate(item.nearDate)
                                }
                            </span>
                        </div>
                    </AccordionDetails>
                </Accordion>
    }

    const setDiscount = () => {
        const defaultDiscount = 'QWE123';

        promocode === defaultDiscount ? setDiscountApplied(true) : setDiscountApplied(false)
    }

    const calculatePrice = () => {
        return discountApplied ? (isArray ? currentService.price * 0.8 : content.price * 0.8) : (isArray ? currentService.price : content.price);
    };

    const setBodyData = (content) => {
        return Array.isArray(content) ? 
            
            content.map((item, index) => {
                return setFragment(item, index);
            }) : contentFormat.formattingString(content.description)
    }

    return (
        <Modal
            open={showModal}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal-container">
                <div className="modal-header">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {
                            isArray ? 'Choose a service' : content.title
                        }
                    </Typography>
                </div>
                <div className="modal-body">
                    {
                        setBodyData(content)
                    }
                </div>
                <div className="modal-divider"></div>
                <div className="modal-footer">
                    <div className="modal-footer__container">
                        <span id="modal-modal-oferta">
                            Text in a modal
                        </span>
                    </div>
                    <div className="modal-footer__container">
                        <form action="" method="post">
                            <div className="promocode-wrapper"  onClick={(e) => setExpandedPromocode(true)}>
                                {
                                    !expandedPromocode ? (
                                        <button className="modal-footer__promocode-btn" type="button">
                                            I have a promo code
                                        </button>
                                    ) : (
                                        <div className="modal-footer__promocode-input">
                                            <input type="text" placeholder="Promocode" value={promocode} onInput={e => setPromocode(e.target.value)}/>
                                            <button className="submit-btn promocode-btn" onClick={e => {
                                                e.preventDefault()
                                                setDiscount()
                                            }}>
                                                <ArrowForwardIosIcon/>
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                            <button className="modal-footer__btn">
                                Pay { calculatePrice() }$
                            </button>
                        </form>
                    </div>
                </div>
                <div className="modal-close-btn" onClick={(e) => closeModal()}>
                    <button type="button">
                        X
                    </button>
                </div>  
            </Box>
        </Modal>
    )

}

export default ModalServices;