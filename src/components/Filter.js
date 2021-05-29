import './Filter.css'


const Filter = ({changePageSize}) => {
    return (
        <label > Show 
                    <select onChange={(event) => changePageSize(event.target.value)}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                      entries</label>
    )
}

export default Filter