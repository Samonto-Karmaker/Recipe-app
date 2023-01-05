import React, { useContext } from "react";
import { AppContext } from "./context";
import "../App.css"

const Modal = () => {

    const {selectedRecipe, closeModal} = useContext(AppContext)
    const {
        strMeal: title,
        strMealThumb: image,
        strInstructions: text,
        strSource: source
    } = selectedRecipe

    return(
        <div className="modal-overlay">
            <div className="modal-container">
                <img 
                    src={image} 
                    alt={title} 
                    className="img modal-img"
                />
                <div className="modal-content">
                    <h3>{title}</h3>
                    <p>Cooking Instructions:</p>
                    <p>{text}</p>
                    <a href={source} target="_blank">Original source</a>
                    <button className="btn btn-hipster close-btn" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal