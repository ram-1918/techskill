import { heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { purposes } from "../components/data";
import { colors } from "../Base";
import list_icon from '../assets/icons/next.png'
import { useTranslation } from "react-i18next";

function Why({keys}) {
  return (
        <BaseSlide image="bg-bg2" id="why">
            <BaseHeader text="skill development program after graduation" />
            <BaseContentDiv text="7 essentials for higher emplpoyment rate" >
            <Concepts />
            </BaseContentDiv>
        </BaseSlide>
    );
}

const bg_color = "#0d9488"

const Concepts = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                    <LeftData />
                    <LeftEdges />
                    <LeftSpan />
                    <FutureImg />
                    <RightSpan />
                    <RightEdges />
                    <RightData />
                </div>
            <BottomSpan />
        </div>
    )
}

const LeftSpan = () => {
    return (
        <div className="w-[4.5rem] mobile:w-[1.6rem] h-full flex flex-col justify-around items-center py-0">
            <div style={{borderColor: bg_color}} className="w-full h-16 border-b border-l"></div>
            <div style={{borderColor: bg_color}} className="w-full border-t"></div>
            <div style={{borderColor: bg_color}} className="w-full h-16 border-t border-l"></div>
        </div>
    )
}

const RightSpan = () => {
    return (
        <div className="w-24 mobile:w-[1.5rem] h-full flex flex-col justify-around items-center space-y-4 py-3">
            <div style={{borderColor: bg_color}} className="w-full h-16 border-b border-r"></div>
            <MiddleLine />
            <div style={{borderColor: bg_color}} className="w-full h-16 border-t border-r"></div>
        </div>
    )
}
const FutureImg = () => <div className="w-60 h-60 mobile:w-24 mobile:h-24 small:w-24 small:h-24 rounded-xl shadow-lg bg-future bg-cover bg-center"></div>

const MiddleLine = () => {
    return (
        <div className="w-full h-[33.33%] flex flex-col justify-center items-center">
            <div style={{borderColor: bg_color}} className="w-full border-t"></div>
        </div>
    )
};

const RightEdges = () => {
    return (
        <div className="h-full w-10 mobile:w-[0.7rem] flex flex-col justify-between items-center py-3">
            <div style={{borderColor: bg_color}} className="h-1 w-full border-t"></div>
            <div style={{borderColor: bg_color}} className="w-full border-t"></div>
            <div style={{borderColor: bg_color}} className="h-1 w-full border-b"></div>
        </div>
    )
}

const LeftEdges = () => {
    return (
        <div className="h-full w-10 mobile:w-[0.7rem] flex flex-col justify-around items-center py-0">
            <div style={{borderColor: bg_color}} className="h-16 w-full border-t"></div>
            <div style={{borderColor: bg_color}} className="w-full border-t"></div>
            <div style={{borderColor: bg_color}} className="h-16 w-full border-b"></div>
        </div>
    )
}

const LeftData = () => {
    return (
        <div className="w-fit h-full  flex flex-col justify-between items-right">
            <TextDiv text="adapting to technological changes" align="text-right border-r border-green-800" />
            <TextDiv text="meeting industry requirements" align="text-right border-r border-green-800" />
            <TextDiv text="enhancing employabilites" align="text-right border-r border-green-800" />
        </div>
    )
}

const RightData = () => {
    return (
        <div className="w-fit h-full  flex flex-col justify-between items-left space-y-10">
            <TextDiv text="personal development" align="text-left border-l border-green-800" />
            <TextDiv text="networking opportunities" align="text-left border-l border-green-800" />
            <TextDiv text="global competitiveness" align="text-left border-l border-green-800" />
        </div>
    )
}
const TextDiv = ({text, align}) => {
    const text_styles = "border text-left px-1.5 py-1 border-green-800 capitalize font-bold";
    const screen = localStorage.getItem('screen') || 'laptop';
    const { t } = useTranslation();
    return (
        <div style={{backgroundColor: colors.bg_color,fontSize: heading_font_size.subcontent[screen]}} className={`${text_styles} ${align}`}>{t(text)}</div>
    )
}

const BottomSpan = () => {
    return (
        <div className="
        h-20 w-full flex flex-col justify-center items-center
        mobile:absolute mobile:top-[21.8rem] 
        ">
            <div style={{borderColor: bg_color}} className="h-32 border-l"></div>
            <TextDiv text="adaptability and problem-solving" align="border-t" />
        </div>
    )
}

export default Why;

//// BACKUP

// const WhyBackup = ({keys}) => {
//     return (
//         <div className="w-full flex flex-col items-start justify-start overflow-scroll">
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
//         <div className="list-style-none mobile:leading-3 mobile:tracking-tight flex justify-start items-start space-x-1" key={data.id}>
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
//         className="font-bold text-md leading-6 tracking-wide py-2 text-sky-600 underline underline-offset-2 uppercase">
//             {title}
//         </span>
//     )
// }