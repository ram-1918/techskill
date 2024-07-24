import { APGOV, APSSDC } from "./BaseImages";
import Heading from "./Heading";

const BaseHeader = ({text}) => {
    return (
        <>
            <SmallScreenHeader text={text} />
            <BigScreenHeader text={text} />
        </>
    );
};

const SmallScreenHeader = ({text}) => {
    return (
        <div className="hidden mobile:flex w-full flex-col justify-start items-center text-center">
            <div className="w-full flex justify-between items-center">
                <APSSDC />
                <APGOV />
            </div>
            <Heading type="main" text={text} /> 
        </div>
    )
}

const BigScreenHeader = ({text}) => {
    return (
        <div className="hidden laptop:flex tablet:flex desktop:flex w-full justify-between items-center">
            <APSSDC />
            <Heading type="main" text={text} /> 
            <APGOV />
        </div>
    )
}

export default BaseHeader;