
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import { APImage } from "../components/BaseImages";
import BaseSlide from "../components/BaseSlide";
import CBN from "../components/CBN";
import { main_headings } from "../components/data";
import Lokesh from "../components/Lokesh";
import PK from "../components/PK";


const Home = ({...props}) => {
    return (
        <BaseSlide {...props} >
            <BaseHeader text={main_headings.slide1.text} />
            <BaseContentDiv>
                <div className="flex items-center justify-center w-full gap-10 mobile:gap-0">
                    <Body />
                    <APImage />
                </div>
            </BaseContentDiv>
        </BaseSlide>
    )
};

const Body = () => {
    return (
        <div className="
        h-full 
        w-[45%] pt-0 flex flex-col justify-center items-start gap-2 
        small-phone:w-fit medium-phone:w-fit large-phone:w-fit small-tablet:w-fit
        ">
            <CBN />
            <PK />
            <Lokesh />
        </div>
    );
};

// const ProposedBy = () => {
//     return (
//         <div className="relative flex flex-col items-start justify-start p-2 bg-gray-100 border rounded-lg w-fit h-fit">
//             <span className="absolute left-0 font-light -top-6 text-md">Proposed By</span>
//             <Srinivas />
//         </div>
//     )
// }

export default Home;