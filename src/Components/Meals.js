import React, {useContext} from "react";
import { AppContext } from "./context";
import "../App.css"
import {BiLike} from "react-icons/bi"

const Meals = () => {
    const {meals} = useContext(AppContext)
    console.log(meals)

    if(meals === undefined || meals ===[]){
        return(
            <div>
                <h1>Meals</h1>
                <section className="section">
                    <h5>Loading...</h5>
                </section>
            </div>
        )
    }

    if(meals === null){
        return(
            <div>
                <h1>Meals</h1>
                <section className="section">
                    <h5>No Reacipe Found!</h5>
                </section>
            </div>
        )
    }

    return(
        <div>
            <h1>Meals</h1>
            <section className="section-center">
                {meals.map(meal => {
                    const {idMeal, strMeal: title, strMealThumb: image} = meal
                    return(
                        <article key={idMeal} className="single-meal">
                            <img src={image} className="img"/>
                            <div>
                                <h5>{title}</h5>
                                <button className="like-btn"><BiLike /></button>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Meals