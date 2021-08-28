import '../App.css'
import {SearchOutlined} from '@ant-design/icons'

const Search = () => {
    return (
        <form className="searchBar">
            <input className="input" type='text' placeholder='Enter Organization Name' />
		
            <button className="submit" type="submit">
            <SearchOutlined/>
            </button>
        </form>
    );
}

export default Search;