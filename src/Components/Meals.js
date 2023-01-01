import React, {useContext} from "react";
import { AppContext } from "./context";

const Meals = () => {
    const context = useContext(AppContext)
    return(
        <div>
            <h1>Meals</h1>
            <p>{context}</p>
        </div>
    )
}

export default Meals