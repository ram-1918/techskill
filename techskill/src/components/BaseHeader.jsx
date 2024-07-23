import APGOV from "./APGOV";
import APSSDC from "./APSSDC";
import Heading from "./Heading";

const BaseHeader = ({text}) => {
    return (
        <div className="w-full flex justify-between items-center">
            <APSSDC />
            <Heading type="h3" text={text} /> 
            <APGOV />
        </div>
    );
};

export default BaseHeader;