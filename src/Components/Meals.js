import React, {useContext} from "react";
import { AppContext } from "./context";
import "../App.css"
import {BiLike} from "react-icons/bi"

const Meals = () => {
    const {allRecipes, selectRecipe, addToFav, favouriteList} = useContext(AppContext)
    const meals = allRecipes["meals"]
    console.log(meals)

    if(meals === undefined || meals ===[]){
        return(
            <div>
                <section className="section">
                    <h5>Loading...</h5>
                </section>
            </div>
        )
    }

    if(meals === null){
        return(
            <div>
                <section className="section">
                    <h5>No Reacipe Found!</h5>
                </section>
            </div>
        )
    }

    return(
        <div>
            <section className="section-center">
                {meals.map(meal => {
                    const {idMeal, strMeal: title, strMealThumb: image} = meal
                    return(
                        <article key={idMeal} className="single-meal">
                            <img src={image} className="img" onClick={() => selectRecipe(idMeal)}/>
                            <div>
                                <h5>{title}</h5>
                                <button 
                                    className={favouriteList.find(r => r.idMeal === idMeal) ? "like-btn liked" : "like-btn"} 
                                    onClick={() => addToFav(idMeal)}
                                >
                                    <BiLike />
                                </button>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Meals