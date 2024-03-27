import bannerImage from "./img/shop.jpg"
const Banner = () => {
    return (
        <div className="h-[70vh]" style={{backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>

        </div>
    );
};

export default Banner;