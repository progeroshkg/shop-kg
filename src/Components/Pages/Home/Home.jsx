import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner/Banner";
import Phones from "../Phones/Phones";

const Home = () => {

    const phonesData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Phones phonesData={phonesData}></Phones>
        </div>
    );
};

export default Home;