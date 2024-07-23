import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import CBN from "../components/CBN";
import Lokesh from "../components/Lokesh";
import Srinivas from "../components/Srinivas";


const Home = () => {
    return (
        <BaseSlide>
            <BaseHeader text="Proposal for a Regional Skills Development Program" />
            <Body />
            <ProposedBy />
        </BaseSlide>
    )
};

const Body = () => {
    return (
        <div className="w-full flex flex-col justify-start items-start space-y-2">
            <CBN />
            <Lokesh />
        </div>
    );
};

const ProposedBy = () => {
    return (
        <div className="relative border w-fit h-fit rounded-lg bg-gray-100 flex flex-col justify-start items-start p-2">
            <span className="absolute -top-6 left-0 text-md font-light">Proposed By</span>
            <Srinivas />
        </div>
    )
}

export default Home;