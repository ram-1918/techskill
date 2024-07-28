import { APGOV, APSSDC } from "./BaseImages";
import Heading from "./Heading";

const BaseHeader = ({text}) => {
    return (
        <>
            <BigScreenHeader text={text} />
            <SmallScreenHeader text={text} />
        </>
    )
};

const BigScreenHeader = ({text}) => {
    return (
        <div className="mobile:hidden small-hidden w-full flex justify-between items-center">
            <APSSDC />
            <Heading type="main" text={text} /> 
            <APGOV />
        </div>
    )
}

const SmallScreenHeader = ({text}) => {
    return (
        <div className="w-full hidden mobile:flex small:flex flex-col justify-start items-center">
            <div className="w-full flex justify-between items-center">
                <APSSDC />
                <APGOV />
            </div>
            <Heading type="main" text={text} /> 
        </div>
    )
}

export default BaseHeader;