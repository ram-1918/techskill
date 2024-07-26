import { APGOV, APSSDC } from "./BaseImages";
import Heading from "./Heading";

const BaseHeader = ({text}) => {
    return (
        <div className="w-[64rem] mobile:w-[23.5rem] tablet:w-[32rem] flex justify-between items-center px-2">
            <APSSDC />
            <Heading type="main" text={text} /> 
            <APGOV />
        </div>
    )
};

export default BaseHeader;