import BaseHeader from "../components/BaseHeader";
import { APImage } from "../components/BaseImages";
import BaseSlide from "../components/BaseSlide";
import CBN from "../components/CBN";
import { main_headings } from "../components/data";
import Lokesh from "../components/Lokesh";


const Home = () => {
    return (
        <BaseSlide>
            <BaseHeader text={main_headings.slide1.text} />
            <div className="w-full flex justify-around items-center gap-2">
                <div className="w-[40%] flex justify-center items-center">
                    <APImage />
                </div>
                <Body />
            </div>
        </BaseSlide>
    )
};

const Body = () => {
    return (
        <div className="h-full w-[60%] flex flex-col justify-start items-start gap-2">
            <CBN />
            <Lokesh />
        </div>
    );
};

// const ProposedBy = () => {
//     return (
//         <div className="relative border w-fit h-fit rounded-lg bg-gray-100 flex flex-col justify-start items-start p-2">
//             <span className="absolute -top-6 left-0 text-md font-light">Proposed By</span>
//             <Srinivas />
//         </div>
//     )
// }

export default Home;