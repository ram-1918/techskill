import { y_spacing } from "../Base";
import { LokeshImage } from "./BaseImages";
import Heading from "./Heading";

const Lokesh = () => {
    return (
        <div className="flex items-center justify-center space-x-4">
            <LokeshImage />
            <div className={`flex flex-col items-start justify-start ${y_spacing}`}>
                <Heading type="sub" text="shri nara lokesh" />
                <Heading type="content" text="hon'ble minister for human resources" />
                <Heading type="content" text="development of andhra pradesh" />
            </div>
        </div>
    );
};

export default Lokesh;