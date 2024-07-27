import { PKImage } from "./BaseImages";
import Heading from "./Heading";

const PK = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            <PKImage />
            <div className="flex flex-col justify-start items-start mobile:-space-y-2">
                <Heading type="sub" text="Shri Pawan Kalyan Konedala" />
                <Heading type="subcontent" text="Hon'ble Deputy Chief Minister" />
                <Heading type="subcontent" text="Government of Andhra Pradesh" />
            </div>
        </div>
    );
};

export default PK;