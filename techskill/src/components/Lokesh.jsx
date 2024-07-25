import { LokeshImage } from "./BaseImages";
import Heading from "./Heading";

const Lokesh = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            <LokeshImage />
            <div className="flex flex-col justify-start items-start -space-y-1">
                <Heading type="sub" text="Shri Lokesh Nara" />
                <Heading type="content" text="Hon'ble Minister for Human Resources" />
                <Heading type="content" text="Development of Andhra Pradesh" />
            </div>
        </div>
    );
};

export default Lokesh;