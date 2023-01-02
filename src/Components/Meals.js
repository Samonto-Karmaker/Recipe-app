import React, {useContext} from "react";
import { AppContext } from "./context";

const Meals = () => {
    const {meals} = useContext(AppContext)
    console.log(meals)

    if(meals === undefined || meals ===[]){
        return(
            <div>
                <h1>Meals</h1>
                <section>
                    <h5>Loading...</h5>
                </section>
            </div>
        )
    }

    return(
        <div>
            <h1>Meals</h1>
            <section>
                {meals.map(meal => {
                    return(
                        <h4>Yes</h4>
                    )
                })}
                <h5>Done</h5>
            </section>
        </div>
    )
}

export default Meals