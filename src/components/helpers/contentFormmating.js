export default class ContentFormmating {


    formattingString = (str) => {
        return str.split('\n').map((line, index) => (
            <>
                {line}
                <br />
            </>
        ))
    }

    formattingDate = (dateStr) => {

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const date = new Date(dateStr);

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        const formattedDate = `${day} ${months[monthIndex]} ${year}`;

        return formattedDate;
    }


}