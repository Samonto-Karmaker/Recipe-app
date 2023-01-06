import React, {useState, useContext} from "react";
import { AppContext } from "./context";
import "../App.css"
import {BiHome} from "react-icons/bi"

const Search = () => {

    const [search, setSearch] = useState("")

    const {setSearchTerm, fetchRandom, fetchAll} = useContext(AppContext)

    const handleInputChange = event => {
        setSearch(event.target.value)
    }

    const handleSearchSubmit = event => {
        event.preventDefault()
        if(search){
            setSearchTerm(search)
        }
        setSearch("")
    }

    const handleRandomMeals = () => {
        setSearchTerm("")
        setSearch("")
        fetchRandom()
    }

    return(
        <div className="search-container">
            <button className="btn home-btn" onClick={fetchAll}><BiHome /></button>
            <form className="search-form" onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    placeholder="Search Recipes"
                    className="form-input" 
                    value={search}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn">
                    Search
                </button>
                <button type="button" className="btn btn-hipster" onClick={handleRandomMeals}>
                    Suprise me!!
                </button>
            </form>
        </div>
    )
}

export default Search