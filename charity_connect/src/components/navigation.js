const NavigationBar = () => {
    return (
        <form>
            <label>Search charities: </label>
            
            <input 
                type="text"
                id="charity_search"
                placeholder="Enter charity name"
            />
            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default NavigationBar;