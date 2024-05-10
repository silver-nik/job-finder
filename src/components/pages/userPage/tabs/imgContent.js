import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

const ImgContent = ({children}) => {

    return (
        <Box className='d-flex img-container' sx={{pt: 2, pb: 2}}>
            {
                <div className='img-view d-flex'>
                    <p className="img-view__title">{children.title}</p>
                    <ul className="img-view__list">
                    {
                        children.content
                    }
                    </ul>
                    <a href="#" className="add-btn">Add new image</a>
                </div>
            }
        </Box>
    )
}

export default ImgContent;