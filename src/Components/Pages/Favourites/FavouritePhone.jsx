
const FavouritePhone = ({ phone, indx }) => {

    console.log(indx);

    const { name, image, description, price } = phone || {}
    return (
        <div className="flex gap-2 w-[500px] mx-auto shadow shadow-purple-300 p-5 rounded">
            <span>{indx}</span>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default FavouritePhone;