import { Link } from "react-router-dom";

const Phone = ({ phone }) => {


    const { id, name, image, price, description } = phone || {};
    return (
        <Link to={`/phone/${id}`}>
            <div className="w-[200px] mx-auto flex justify-center p-5 rounded shadow shadow-gray-400 hover:transform hover:scale-[1.1] transition-all cursor-pointer">
                <section className="space-y-4">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    
                    <div>
                        <h1 className="text-center font-bold text-gray-500 text-xl">{name}</h1>
                    </div>
                </section>
            </div>
        </Link>
    );
};

export default Phone;