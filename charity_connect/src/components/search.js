import '../App.css'
import {SearchOutlined} from '@ant-design/icons'

const start_search = async event => {
    
}

const Search = () => {
    return (
        <form className="searchBar">
            <input className="input" id="search_org" type='text' placeholder='Enter Organization Name'/>
            <button className="submit" id="search_submit" type="submit" onClick={start_search}>
            <SearchOutlined/>
            </button>
        </form>
    );
}

export default Search;