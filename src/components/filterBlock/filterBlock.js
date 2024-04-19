import './filterBlock.scss';

const FilterBlock = ({title, options, titleName, updateSearchFilters}) => {

    


    return (
        <div className={`filter-block__${titleName} filter-block`} data-filter={titleName}>
            <span className='filter-block__title'>{title}</span>
            <div className='filter-block__options'>
                <ul>
                    {
                        options.map(item => {
                            return (
                                <li>
                                    <label htmlFor={`item__${item}`}>
                                        <input type="checkbox" name={item} id={`item__${item}`}  onChange={(e) => {

                                            let checkboxes = document.querySelector(`.filter-block__${titleName}`).querySelectorAll('input[type="checkbox"]');

                                            checkboxes.forEach(checkbox => {
                                                if (checkbox !== e.target) {
                                                    checkbox.checked = false;
                                                }
                                            });

                                            e.target.checked ? updateSearchFilters({ [titleName]: item }) : updateSearchFilters({ [titleName]: '' })
                                        }}/>
                                        <span>{item}</span>
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default FilterBlock;