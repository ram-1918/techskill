import { CBNImage } from "./BaseImages";
import Heading from "./Heading";

const CBN = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            <CBNImage />
            <div className="flex flex-col justify-start items-start">
                <Heading type="sub" text="Shri Nara Chandrababu Naidu" />
                <Heading type="content" text="Hon'ble Chief Minister" />
                <Heading type="content" text="Government of Andhra Pradesh" />
            </div>
        </div>
    );
};

export default CBN;