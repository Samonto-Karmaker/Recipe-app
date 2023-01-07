import React, {useEffect, useState} from "react";

const AppContext = React.createContext()

const allRecipesUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomRecipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

const getFav = () => {
    let fav = localStorage.getItem("fav")
    if(fav){
        fav = JSON.parse(localStorage.getItem("fav"))
        return fav
    }
    return []
}

const AppProvider = ({children}) => {

    const [allRecipes, setAllRecipes] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedRecipe, setSelectedRecipe] = useState(null)
    const [favouriteList, setFavouriteList] = useState(getFav())

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

    const fetchAll = () => {
        fetchData(allRecipesUrl)
    }

    const selectRecipe = (idMeal, isFav) => {
        let r 
        if(isFav){
            r = favouriteList.find(r => r.idMeal === idMeal)
        }
        else{
            r = allRecipes["meals"].find(r => r.idMeal === idMeal)
        }
        setSelectedRecipe(r)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const addToFav = idMeal => {
        if(favouriteList.find(r => r.idMeal === idMeal)) return
        let fav = allRecipes["meals"].find(r => r.idMeal === idMeal)
        let updatedFav = [...favouriteList, fav]
        localStorage.setItem("fav", JSON.stringify(updatedFav))
        setFavouriteList(updatedFav)
    }

    const removeFromFav = idMeal => {
        let updatedFav = favouriteList.filter(r => r.idMeal !== idMeal)
        localStorage.setItem("fav", JSON.stringify(updatedFav))
        setFavouriteList(updatedFav)
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
        <AppContext.Provider value={{
            allRecipes, 
            setSearchTerm, 
            fetchRandom, 
            showModal,
            selectedRecipe,
            selectRecipe,
            closeModal,
            fetchAll,
            favouriteList,
            addToFav,
            removeFromFav
        }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}