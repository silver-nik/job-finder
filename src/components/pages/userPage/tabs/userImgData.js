import { useState, useEffect } from "react";

import ImgContent from "./imgContent";

const UserImgData = ({children}) => {

    return (
        <>
            <p className="img-tab__title">This page displays all the files you have ever attached to your CV. Here you can upload new images or delete unwanted images. Images will automatically change in all CVs to which they are attached.</p>
            <ImgContent children={{ title: 'Pictures for CVs', content: children.cv ? children.cv : 'There are no pictures right now' }}/>
            <ImgContent children={{ title: 'Pictures for portfolio', content: children.portfolio ? children.portfolio : 'There are no pictures right now' }}/>
        </>
    )
}

export default UserImgData;