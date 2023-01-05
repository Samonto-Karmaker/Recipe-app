import React, {useContext, useEffect, useState} from "react";

const AppContext = React.createContext()

const allRecipesUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomRecipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

const AppProvider = ({children}) => {

    let [allRecipes, setAllRecipes] = useState([])
    let [searchTerm, setSearchTerm] = useState('')

    const fetchData = async url => {
        try{
            const response = await fetch(url)
            let data = await response.json()
            setAllRecipes(data)
            console.log(allRecipes)
        }
        catch (error){
            console.log(error)
        }
    }

    const fetchRandom = () => {
        fetchData(randomRecipeUrl)
    }

    useEffect(() => {
        fetchData(allRecipesUrl)
    }, [])

    useEffect(() => {
        if(searchTerm !== ""){
            fetchData(`${allRecipesUrl}${searchTerm}`)
        }
    }, [searchTerm])

    return(
        <AppContext.Provider value={{allRecipes, setSearchTerm, fetchRandom}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}