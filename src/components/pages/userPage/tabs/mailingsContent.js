import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

import { useState, useEffect } from 'react';

const MailingsContent = ({children, fields, handleFieldChange}) => {

    const checkboxInput = ({ label, value }, i) => {       
        return (
            <label>
                {label}
                <Checkbox color="secondary" key={i} checked={value} onChange={(e) => handleFieldChange(i)} />
            </label>
        );
    };

    return (
        <Box className='d-flex mailings-container' sx={{pt: 2, pb: 2}}>
            {
                <div className='d-flex'>
                    <p className="mailings__title">{children.title}</p>
                    <ul className="mailings__list">
                    {
                        fields.map((field, i) => (
                            checkboxInput(field, i)
                        ))
                    }
                    </ul>
                </div>
            }
        </Box>
    )
}

export default MailingsContent;