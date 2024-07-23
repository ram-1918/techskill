import APGOV from "../components/APGOV";
import APSSDC from "../components/APSSDC";
import CBN from "../components/CBN";
import Heading from "../components/Heading";
import Lokesh from "../components/Lokesh";
import Srinivas from "../components/Srinivas";


const Home = () => {
    return (
        <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
            <div className="w-full flex justify-between items-center">
                <APSSDC />
                <Heading type="h1" text="Proposal for a Regional Skills Development Program" /> 
                <APGOV />
            </div>
            <div className="w-full flex flex-col justify-start items-start space-y-2">
                <CBN />
                <Lokesh />
            </div>
            <div className="relative border w-fit h-fit rounded-lg bg-gray-100 flex flex-col justify-start items-start p-2">
                <span className="absolute -top-6 left-0 text-md font-light">Proposed By</span>
                <Srinivas />
            </div>
        </section>
    )
};

export default Home;