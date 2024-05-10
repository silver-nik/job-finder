import { useState, useEffect } from "react";

import MailingsContent from "./mailingsContent";

const UserMailingsData = ({children}) => {
    
    const [fields1, setFields1] = useState(
        [
            { label: 'Alerts and tips', value: true },
            { label: 'Site news and promotional information', value: true },
            { label: 'New vacancies that match your CV', value: true }
        ]
    )

    const [fields2, setFields2] = useState(
        [
            { label: 'Alerts and tips', value: true },
            { label: 'New vacancies that match your CV', value: true },
            { label: 'Birthday greetings', value: true },
            { label: 'Daily notification of CV views', value: true },
            { label: 'Instant notification of CV views', value: false },
            { label: 'Labour market news, website and advertising, apart from the weekly digest', value: true }
        ]
    )

    const [fields3, setFields3] = useState(
        [
            { label: 'Views on your CV', value: false },
            { label: 'Vacancy invitations', value: true },
            { label: 'Correspondence with employer', value: true },
            { label: 'New vacancies that match your CV', value: true }
        ]
    )

    const handleField1Change = (index) => {
        setFields1(prevFields => {
            const updatedFields = [...prevFields]; // Создаем копию массива fields3
            updatedFields[index] = { ...updatedFields[index], value: !updatedFields[index].value }; // Обновляем значение второго элемента
            return updatedFields; // Возвращаем обновленный массив
        });
    }

    const handleField2Change = (index) => {
        setFields2(prevFields => {
            const updatedFields = [...prevFields]; // Создаем копию массива fields3
            updatedFields[index] = { ...updatedFields[index], value: !updatedFields[index].value }; // Обновляем значение второго элемента
            return updatedFields; // Возвращаем обновленный массив
        });
    }

    const handleField3Change = (index) => {
        setFields3(prevFields => {
            const updatedFields = [...prevFields]; // Создаем копию массива fields3
            updatedFields[index] = { ...updatedFields[index], value: !updatedFields[index].value }; // Обновляем значение второго элемента
            return updatedFields; // Возвращаем обновленный массив
        });
    }

    return (
        <>
            <MailingsContent children={{ title: 'SMS notifications' }} fields={fields1} handleFieldChange={handleField1Change} />
            <MailingsContent children={{ title: 'Postal mailings' }} fields={fields2} handleFieldChange={handleField2Change} />
            <MailingsContent children={{ title: 'PUSH notifications' }} fields={fields3} handleFieldChange={handleField3Change} />
            <div className="d-flex">
                <p className="mailings__title"></p>
                <a href="#" className="add-btn">
                    Save changes
                </a>
            </div>
        </>
    )
}

export default UserMailingsData;