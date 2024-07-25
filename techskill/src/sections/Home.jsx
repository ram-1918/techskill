
import BaseContentDiv from "../components/BaseContentDiv";
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
            <BaseContentDiv>
                <div className="w-full flex justify-center items-center gap-10">
                    <APImage />
                    <Body />
                </div>
            </BaseContentDiv>
        </BaseSlide>
    )
};

const Body = () => {
    return (
        <div className="h-full w-[45%] flex flex-col justify-start items-start gap-2 pt-10">
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