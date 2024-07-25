import { CBNImage } from "./BaseImages";
import Heading from "./Heading";

const CBN = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            <CBNImage />
            <div className="flex flex-col justify-start items-start -space-y-1">
                <Heading type="sub" text="Shri Chandrababu Naidu Nara" />
                <Heading type="content" text="Hon'ble Chief Minister" />
                <Heading type="content" text="Government of Andhra Pradesh" />
            </div>
        </div>
    );
};

export default CBN;