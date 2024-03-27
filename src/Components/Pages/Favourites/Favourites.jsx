import { useEffect, useState } from "react";
import FavouritePhone from "./FavouritePhone";

const Favourites = () => {

    const [favouritePhones, setFavouritePhones] = useState([]);

    useEffect(() => {
        const saveItems = JSON.parse(localStorage.getItem('favouritePhones'));
        setFavouritePhones(saveItems);

    }, [])

    return (
        <div>
            <div className="">
                {
                    favouritePhones.map((phone, indx) => <FavouritePhone key={phone.id} indx={indx + 1} phone={phone}></FavouritePhone>)
                }
            </div>
        </div>
    );
};

export default Favourites;