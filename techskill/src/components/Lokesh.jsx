import { LokeshImage } from "./BaseImages";
import Heading from "./Heading";

const Lokesh = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            <LokeshImage />
            <div className="flex flex-col justify-start items-start mobile:-space-y-2">
                <Heading type="sub" text="Shri Lokesh Nara" />
                <Heading type="subcontent" text="Hon'ble Minister for Human Resources" />
                <Heading type="subcontent" text="Development of Andhra Pradesh" />
            </div>
        </div>
    );
};

export default Lokesh;