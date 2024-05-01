import { useState, useEffect } from "react";
import { useSearchParams, useParams } from 'react-router-dom';

// import Services from "../../helpers/services";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './modal.scss';

const ModalServices = ({showModal, closeModal, content, formattingString}) => {
    

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
                        {content.title}
                    </Typography>
                </div>
                <div className="modal-body">
                    {formattingString(content.description)}
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
                            <div className="promocode-wrapper">
                                <button className="modal-footer__promocode-btn">
                                    I have a promo code
                                </button>
                            </div>
                            <button className="modal-footer__btn">
                                Pay {content.price}$
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