import './userPage.scss';

import { useState, useEffect } from "react";
import Services from "../../helpers/services";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import PersonalData from './tabs/userPersonalData';
import UserImgData from './tabs/userImgData';
import UserMailingsData from './tabs/userMailingsData';

const UserPage = () => {

    const newServices = new Services();

    const id = localStorage.getItem('id');
    const [value, setValue] = useState(1);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        newServices.getListPerformers('', id)
            .then(res => setUserData(res))
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const CustomTabPanel = (props) => {
        const { children, value, index, component, ...other } = props;
      
        return (
          <div
            index={index} 
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && component}
          </div>
        );
    }

    const a11yProps = (index) => {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <section>
            <div className='settings__title'>
                Настройки
            </div>
            <div className='settings__content'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs'>
                    <Tab label="Personal data" {...a11yProps(0)} />
                    <Tab label="Images" {...a11yProps(1)} />
                    <Tab label="Mailings" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel 
                    value={value} 
                    index={0} 
                    component={<PersonalData children={userData} />} 
                />
                <CustomTabPanel 
                    value={value} 
                    index={1} 
                    component={<UserImgData children={userData}/>} 
                />
                <CustomTabPanel 
                    value={value} 
                    index={2} 
                    component={<UserMailingsData children={userData}/>} 
                />
            </Box>
            </div>
        </section>
    )
}

export default UserPage;