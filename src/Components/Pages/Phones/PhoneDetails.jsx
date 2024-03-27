import { json, useLoaderData, useParams } from "react-router-dom";

const PhoneDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const findData = data.find(phone => phone.id == id)

    const { name, image, price, description } = findData || {};


    const handleAddtoFavourite = () => {


        const addedPhone = [];
        const favouriteItems = JSON.parse(localStorage.getItem('favouritePhones'));

        if (!favouriteItems) {
            addedPhone.push(findData);
            localStorage.setItem('favouritePhones', JSON.stringify(addedPhone));
        } else {

            const isExists = favouriteItems.find(items => items.id === id);

            if (!isExists) {
                addedPhone.push(...favouriteItems, findData)
                localStorage.setItem('favouritePhones', JSON.stringify(addedPhone));
                alert('Added to favourite')
            } else {
                alert('Already added to favourite')
            }


        }



    }


    return (
        <div className=" h-[80vh] flex items-center">

            <div className="grid grid-cols-1 mt-20 md:mt-0 md:grid-cols-3 ">

                <section className="col-span-1 mx-auto">
                    <div className="h-[300px]">
                        <img className="h-full" src={image} alt="" />
                    </div>
                </section>

                <section className="col-span-2 flex items-center">

                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="text-xl font-medium text-gray-500">{description}</p>

                        <h4 className="text-2xl  font-medium text-pink-700"><span className="font-bold mr-1 text-black">$</span>{price}</h4>
                        <div className="divider"></div>

                        <div>
                            <button onClick={() => handleAddtoFavourite()} className="btn btn-md w-full flex justify-start bg-purple-700">Add to Favourite</button>
                        </div>

                    </div>
                </section>
            </div>

        </div>
    );
};

export default PhoneDetails;