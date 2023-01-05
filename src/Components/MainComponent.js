import React, { useContext } from "react";
import Search from "./Search"
import Favourits from "./Favourites"
import Meals from "./Meals"
import Modal from "./Modal"
import { AppContext } from "./context";

const MainComponent = () => {
    const {showModal} = useContext(AppContext)
    return(
        <div>
            <Search />
            <Favourits />
            <Meals />
            {showModal && <Modal />}
        </div>
    )
}

export default MainComponent