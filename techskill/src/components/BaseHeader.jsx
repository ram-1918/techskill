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
        <div className="hidden w-full tablet:flex laptop:flex desktop:flex justify-between items-center">
            <APSSDC />
            <Heading type="main" text={text} /> 
            <APGOV />
        </div>
    )
}

const SmallScreenHeader = ({text}) => {
    return (
        <div className="w-full tablet:hidden laptop:hidden desktop:hidden flex flex-col justify-start items-center">
            <div className="w-full flex justify-between items-center">
                <APSSDC />
                <APGOV />
            </div>
            <Heading type="main" text={text} /> 
        </div>
    )
}

export default BaseHeader;