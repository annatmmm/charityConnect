import '../App.css'
import {SearchOutlined} from '@ant-design/icons'

const start_search = async event => {
    
}

const Search = () => {
    return (
        <form className="searchBar">
            <input className="input" type='text' placeholder='Enter Organization Name' />
            <button className="submit" type="submit" onClick={start_search}>
            <SearchOutlined/>
            </button>
        </form>
    );
}

export default Search;