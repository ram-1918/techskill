import { CBNImage } from "./BaseImages";
import Heading from "./Heading";

const CBN = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            <CBNImage />
            <div className="flex flex-col justify-start items-start mobile:-space-y-2">
                <Heading type="sub" text="shri nara chandrababu naidu" />
                <Heading type="content" text="hon'ble chief minister" />
                <Heading type="content" text="government of andhra pradesh" />
            </div>
        </div>
    );
};

export default CBN;