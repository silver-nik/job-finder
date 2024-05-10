import TabContent from './tabContent';

const PersonalData = ({children}) => {

    const fields1 = [
        { label: 'First name', value: children.first_name },
        { label: 'Last name', value: children.last_name }
    ];

    const fields2 = [
        { label: 'Current password', value: '' },
        { label: 'New password', value: '' },
        { label: 'Repeat new password', value: '' }
    ];

    const fields3 = [
        { label: 'Current email', value: children.email ? children.email : 'Unspecified' },
        { label: 'New email', value: '' },
        { label: 'Password', value: '' }
    ];

    const fields4 = [
        { label: 'Current tel', value: children.tel ? children.tel : 'Unspecified' },
        { label: 'New tel', value: '' },
        { label: 'Password', value: '' }
    ];

    return (
        <>
            <TabContent children={{ title: 'Name', content: children.first_name + ' ' + children.last_name }} fields={fields1} />
            <TabContent children={{ title: 'Password', content: 'Updated 3 years ago' }} fields={fields2} />
            <TabContent children={{ title: 'Email', content: children.email ? children.email : 'Unspecified' }} fields={fields3} />
            <TabContent children={{ title: 'Tel', content: children.tel ? children.tel : 'Unspecified' }} fields={fields4} />
        </>
    )
}

export default PersonalData;