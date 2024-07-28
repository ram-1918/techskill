import { APGOV, APSSDC } from "./BaseImages";
import Heading from "./Heading";

const BaseHeader = ({text}) => {
    return (
        <div className="w-full flex justify-between items-center">
            <APSSDC />
            <Heading type="main" text={text} /> 
            <APGOV />
        </div>
    )
};

export default BaseHeader;