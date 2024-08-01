import { heading_font_size, image_size, image_size_essential } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { colors } from "../Base";
import { useTranslation } from "react-i18next";
import why_image from "../assets/images/why_image_orange.png";
import { BottomSpan, Edges, FutureImg, LeftData, RightData, Span } from "../components/WhyDiagram";


function Why({...props}) {
  return (
        <BaseSlide image="bg-bg2" id="why" {...props} >
            <BaseHeader text="skill development program after graduation" />
            <BaseContentDiv text="7 essentials for higher emplpoyment rate" >
            <Concepts />
            </BaseContentDiv>
        </BaseSlide>
    );
}

const Concepts = () => {
    return (
        <div className="flex flex-col items-center justify-start w-full h-full">
            {/* <div className=""></div> */}
            {/* <div className="w-[90%] h-[90%] bg-whyimage bg-cover bg-center bg-no-repeat">
                <img src={why_image} alt="why" className="w-full h-full bg-cover" />
            </div> */}
                <div className="relative flex items-center justify-center">
                    <LeftData />
                    <Edges />
                    <Span border="border-l-2" />
                    <FutureImg />
                    <Span border="border-r-2" />
                    <Edges />
                    <RightData />
                </div>
            <BottomSpan />
        </div>
    )
}
export default Why;


//// BACKUP

// const WhyBackup = ({keys}) => {
//     return (
//         <div className="flex flex-col items-start justify-start w-full overflow-scroll">
//             {keys.map(i => (
//                 <div className="">
//                     <Title key={i} title={purposes[i].title} />
//                     {purposes[i].content.map((content) => (
//                         <Listitems data={content} />
//                     ))}
//                 </div>
//             ))}
//         </div>
//     )
// }

// const Listitems = ({data}) => {
//     const screen = localStorage.getItem('screen') || 'laptop';
//     return (
//         <div className="flex items-start justify-start space-x-1 list-style-none mobile:leading-3 mobile:tracking-tight" key={data.id}>
//             <img className="w-5 h-5" src={list_icon} alt="list" />
//             <span key={data.id} style={{fontSize:heading_font_size.subcontent[screen], color: colors.subcontent}}>
//             <span style={{color: colors.subcontent, fontSize:heading_font_size.subcontent[screen]}} className="font-semibold  pr-1 after:content-[':']">{data.title}</span> {data.text}
//             </span>
//         </div>
//     )
// }

// const Title = ({title}) => {
//     const screen = localStorage.getItem('screen') || 'laptop';
//     return (
//         <span 
//         style={{color: colors.main, fontSize:heading_font_size.content[screen]}} 
//         className="py-2 font-bold leading-6 tracking-wide underline uppercase text-md text-sky-600 underline-offset-2">
//             {title}
//         </span>
//     )
// }