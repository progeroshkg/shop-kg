import Phone from "./Phone";

const Phones = ({ phonesData }) => {

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold my-10 text-center">Our Phones</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {
                    phonesData?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;