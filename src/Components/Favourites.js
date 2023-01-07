import React, {useContext} from "react";
import { AppContext } from "./context";
import "../App.css"

const Favourits = () => {

    const {favouriteList, selectRecipe, removeFromFav} = useContext(AppContext)

    return(
        <div>
            <section className="fav">
                <div className="fav-content">
                    <h5>Favourites</h5>
                    <div className="fav-container">
                        {
                            favouriteList.map(fav => {
                                const {idMeal, strMealThumb: image} = fav
                                return(
                                    <div key={idMeal} className="fav-item">
                                        <img 
                                            src={image} 
                                            className="img fav-img"
                                            onClick={() => selectRecipe(idMeal, true)}
                                        />
                                        <button 
                                            className="remove-btn" 
                                            onClick={() => removeFromFav(idMeal)}
                                            >
                                                Remove
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Favourits