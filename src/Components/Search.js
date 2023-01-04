import React, {useState, useContext} from "react";
import "../App.css"

const Search = () => {

    const [search, setSearch] = useState("")

    const handleInputChange = event => {
        setSearch(event.target.value)
    }

    const handleSearchSubmit = event => {
        event.preventDefault()
    }

    return(
        <div className="search-container">
            <form className="search-form" onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    placeholder="Search Recipes"
                    className="form-input" 
                    value={search}
                    onChange={handleInputChange}
                />
                <button type="submit"className="btn">
                    Search
                </button>
                <button type="button"className="btn btn-hipster">
                    Suprise me!!
                </button>
            </form>
        </div>
    )
}

export default Search