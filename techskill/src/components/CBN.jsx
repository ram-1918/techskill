import { y_spacing } from "../Base";
import { CBNImage } from "./BaseImages";
import Heading from "./Heading";

const CBN = () => {
    return (
        <div className="flex items-center justify-center space-x-4">
            <CBNImage />
            <div className={`flex flex-col items-start justify-center ${y_spacing}`}>
                <Heading type="sub" text="shri nara chandrababu naidu" />
                <Heading type="content" text="hon'ble chief minister" />
                <Heading type="content" text="government of andhra pradesh" />
            </div>
        </div>
    );
};

export default CBN;