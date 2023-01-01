import React from "react";
import Search from "./Search"
import Favourits from "./Favourites"
import Meals from "./Meals"
import Modal from "./Modal"

const MainComponent = () => {
    return(
        <div>
            <Search />
            <Favourits />
            <Meals />
            <Modal />
        </div>
    )
}

export default MainComponent