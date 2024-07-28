
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import { APImage } from "../components/BaseImages";
import BaseSlide from "../components/BaseSlide";
import CBN from "../components/CBN";
import { main_headings } from "../components/data";
import Lokesh from "../components/Lokesh";
import PK from "../components/PK";


const Home = () => {
    return (
        <BaseSlide>
            <BaseHeader text={main_headings.slide1.text} />
            <BaseContentDiv>
                <div className="w-full mobile:h-full flex justify-center items-center gap-10 mobile:gap-0">
                    <APImage />
                    <Body />
                </div>
            </BaseContentDiv>
        </BaseSlide>
    )
};

const Body = () => {
    return (
        <div className="h-full w-[55%] mobile:w-full mobile:h-full mobile:pt-0 mobile:pl-10 flex flex-col justify-start mobile:justify-center items-start gap-2">
            <CBN />
            <PK />
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