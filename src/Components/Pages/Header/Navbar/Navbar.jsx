import { NavLink } from "react-router-dom";
import "./navStyle.css";

const Navbar = () => {
    return (
        <div className="py-5">

            <div className="flex justify-between items-center shadow shadow-pink-300 p-5">
                <div>
                    <h1 className="text-4xl font-bold text-purple-500">Shop <span className="text-pink-600">kg</span></h1>
                </div>

                <nav>
                    <ul className="flex justify-between items-center gap-10 text-3xl font-semibold text-gray-500">
                        <li>
                            <NavLink to={"/"} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 font-medium underline transition-all" : ""
                            }>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/favourites"} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 font-medium underline transition-all" : ""
                            }>Favourites</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/login"} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 font-medium underline transition-all" : ""
                            }>Login</NavLink>
                        </li>


                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;