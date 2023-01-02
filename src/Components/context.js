import React, {useContext, useEffect, useState} from "react";

const AppContext = React.createContext()

const allRecipes = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomRecipe = "https://www.themealdb.com/api/json/v1/1/random.php"

const AppProvider = ({children}) => {
    const fetchData = async url => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        }
        catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData(allRecipes)
    }, [])

    return(
        <AppContext.Provider value="Hello World">
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}