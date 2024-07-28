import { PKImage } from "./BaseImages";
import Heading from "./Heading";

const PK = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            <PKImage />
            <div className="flex flex-col justify-start items-start mobile:-space-y-2">
                <Heading type="sub" text="shri konedala pawan kalyan" />
                <Heading type="content" text="hon'ble deputy chief minister" />
                <Heading type="content" text="government of andhra pradesh" />
            </div>
        </div>
    );
};

export default PK;