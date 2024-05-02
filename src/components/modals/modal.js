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

import './modal.scss';
import ContentFormmating from "../helpers/contentFormmating";

const ModalServices = ({showModal, closeModal, content}) => {

    const [isArray, setIsArray] = useState(false);
    const [expanded, setExpanded] = useState();
    const [expandedPromocode, setExpandedPromocode] = useState(false);
    const [currentService, setCurrentService] = useState({});


    const contentFormat = new ContentFormmating();

    const handleChange = (panel, item) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);

        newExpanded ? setCurrentService(item) : setCurrentService({});
    };

    useEffect(() => {
        
        Array.isArray(content) ? setIsArray(true) : setIsArray(false);

    }, []);

    const togglePromocodeWrapper = () => {

    }

    const setFragment = (item, index) => {
        return  <Accordion expanded={expanded === index} onChange={handleChange(index, item)}>
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

    const setBodyData = (content) => {

        return Array.isArray(content) ? content.map((item, index) => {
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
                                        <div>
                                            <input type="text"/>
                                        </div>
                                    )
                                }
                            </div>
                            <button className="modal-footer__btn">
                                Pay {isArray ? currentService.price : content.price }$
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