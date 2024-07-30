import { y_spacing } from "../Base";
import { PKImage } from "./BaseImages";
import Heading from "./Heading";

const PK = () => {
    return (
        <div className="flex items-center justify-center space-x-4">
            <PKImage />
            <div className={`flex flex-col items-start justify-start ${y_spacing}`}>
                <Heading type="sub" text="shri konedala pawan kalyan" />
                <Heading type="content" text="hon'ble deputy chief minister" />
                <Heading type="content" text="government of andhra pradesh" />
            </div>
        </div>
    );
};

export default PK;