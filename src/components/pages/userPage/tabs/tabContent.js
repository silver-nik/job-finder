import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

const TabContent = ({children, fields}) => {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const formInput = ({ label, value }) => {
        return (
            <label>
                {label}
                <input type="text" value={value} className='input-field' />
            </label>
        );
    };

    const userForm = (fields) => {
    
        return (
            <form action="post" className='tab-form'>
                {fields.map((field, _) => (
                    formInput(field)
                ))}
                <label>
                    <div className='btn-container'>
                        <input type="button" value={'Save'} className='btn btn-primary'/>
                        <input type="button" value={'Cancel'} className='btn' onClick={(e) => {
                            // e.target.closest('.hidden').style.display = 'none';
                            toggleForm()
                            // e.target.closest('.tab-container').querySelector('.tab-view').style.display = 'flex'
                        }} />
                    </div>
                </label>
            </form>
        )
    
    }

    return (
        <Box className='d-flex tab-container' sx={{pt: 2, pb: 2}}>
            {
                !showForm ? 
                <div className='tab-view d-flex'>
                    <p>{children.title}</p>
                    <div className='tab-content'>
                        {children.content}
                        <a href="#" onClick={toggleForm}>Change</a>
                    </div>
                </div> : ''
            }
            <div className={`hidden ${showForm ? 'visible' : ''}`}>
                {
                    showForm ? userForm(fields) : ''
                }
            </div>
        </Box>
    )
}

export default TabContent;