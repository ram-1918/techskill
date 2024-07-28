import { LokeshImage } from "./BaseImages";
import Heading from "./Heading";

const Lokesh = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            <LokeshImage />
            <div className="flex flex-col justify-start items-start mobile:-space-y-2">
                <Heading type="sub" text="shri nara lokesh" />
                <Heading type="content" text="hon'ble minister for human resources" />
                <Heading type="content" text="development of andhra pradesh" />
            </div>
        </div>
    );
};

export default Lokesh;