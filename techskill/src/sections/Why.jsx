import { heading_font_size, image_size, image_size_essential } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { colors } from "../Base";
import { useTranslation } from "react-i18next";
import why_image from "../assets/images/why_image.png";

const screen_specific = {
    '5k-monitor': {
        width: 'w-[20rem]',
        height: 'h-[15rem]',
        innerwidth: 'w-[10rem]',
        padding: 'py-[2.8rem]'
    },
    'ultra-wide': {
        width: 'w-[20rem]',
        height: 'h-[15rem]',
        innerwidth: 'w-[10rem]',
        padding: 'py-[2rem]'
    },
    'large-desktop': {
        width: 'w-[10rem]',
        height: 'h-[10rem]',
        innerwidth: 'w-[10rem]',
        padding: 'py-[3.3rem]'
    },
    'standard-desktop': {
        width: 'w-[10rem]',
        height: 'h-[7rem]',
        innerwidth: 'w-[7rem]',
        padding: 'py-[2.3rem]'
    },
    'large-laptop': {
        width: 'w-[8rem]',
        height: 'h-[6rem]',
        innerwidth: 'w-[4rem]',
        padding: 'py-[1.8rem]'
    },
    'medium-laptop': {
        width: 'w-[7rem]',
        height: 'h-[5rem]',
        innerwidth: 'w-[3.5rem]',
        padding: 'py-[1.7rem]'
    },
    'small-laptop': {
        width: 'w-[6rem]',
        height: 'h-[5rem]',
        innerwidth: 'w-[3rem]',
        padding: 'py-[0.5rem]'
    },
    'large-tablet': {
        width: 'w-[5rem]',
        height: 'h-[4rem]',
        innerwidth: 'w-[3rem]',
        padding: 'py-[0.6rem]'
    },    
    'small-tablet': {
        width: 'w-[3rem]',
        height: 'h-[4rem]',
        innerwidth: 'w-[2.2rem]',
        padding: 'py-[0.2rem]'
    },
    'large-phone': {
        width: 'w-[2rem]',
        height: 'h-[3rem]',
        innerwidth: 'w-[2rem]',
        padding: 'py-[0.1rem]'
    },
    'small-phone': {
        width: 'w-[1rem]',
        height: 'h-[2rem]',
        innerwidth: 'w-[1.2rem]',
        padding: 'py-[0.3rem]'
    },
}

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

const bg_color = "#0d9488"


const Concepts = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            {/* <div className=""></div> */}
            <div className="w-[90%] h-[90%] flex justify-center items-center">
                <img src={why_image} alt="why" className="" />
            </div>
                {/* <div className="flex items-center justify-center">
                    <LeftData />
                    <LeftEdges />
                    <LeftSpan />
                    <FutureImg />
                    <RightSpan />
                    <RightEdges />
                    <RightData />
                </div>
            <BottomSpan /> */}
        </div>
    )
}
export default Why;

const FutureImg = () => <div className={`${image_size_essential} bg-center bg-cover shadow-lg  rounded-xl bg-future`}></div>

const LeftSpan = () => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';
    return (
        <div className={` ${screen_specific[screen].width} h-full flex flex-col justify-around items-center space-y-4 py-0`}>
            <div style={{borderColor: bg_color}} className={`w-full ${screen_specific[screen].height} border-b border-l`}></div>
            <div style={{borderColor: bg_color}} className="w-full h-1 border-t"></div>
            <div style={{borderColor: bg_color}} className={`w-full ${screen_specific[screen].height} border-t border-l`}></div>
        </div>
    )
}

const RightSpan = () => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';

    return (
        <div className={`${screen_specific[screen].width} h-full flex flex-col justify-around items-center space-y-4 py-0`}>
            <div style={{borderColor: bg_color}} className={`w-full ${screen_specific[screen].height} border-b border-r`}></div>
            <div style={{borderColor: bg_color}} className="w-full h-1 border-t"></div>
            <div style={{borderColor: bg_color}} className={`w-full ${screen_specific[screen].height} border-t border-r`}></div>
        </div>
    )
}


const MiddleLine = () => {
    return (
        <div className="w-full h-[33.33%] flex flex-col justify-center items-center">
            <div style={{borderColor: bg_color}} className="w-full border-t"></div>
        </div>
    )
};

const RightEdges = () => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';

    return (
        <div className={`h-full ${screen_specific[screen].innerwidth} flex flex-col justify-between items-center ${screen_specific[screen].padding} `}>
            <div style={{borderColor: bg_color}} className="w-full h-1 border-t"></div>
            <div style={{borderColor: bg_color}} className="w-full h-1 border-t"></div>
            <div style={{borderColor: bg_color}} className="w-full h-1 border-b"></div>
        </div>
    )
}

const LeftEdges = () => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';

    return (
        <div className={`h-full ${screen_specific[screen].innerwidth}  flex flex-col justify-between items-center ${screen_specific[screen].padding} `}>
            <div style={{borderColor: bg_color}} className="w-full h-1 border-t"></div>
            <div style={{borderColor: bg_color}} className="w-full h-1 border-t"></div>
            <div style={{borderColor: bg_color}} className="w-full h-1 border-b"></div>
        </div>
    )
}

const LeftData = () => {
    return (
        <div className="flex flex-col justify-between h-full w-fit items-right">
            <TextDiv text="adapting to technological changes" align="text-right border-r border-green-800" />
            <TextDiv text="meeting industry requirements" align="text-right border-r border-green-800" />
            <TextDiv text="enhancing employabilites" align="text-right border-r border-green-800" />
        </div>
    )
}

const RightData = () => {
    return (
        <div className="flex flex-col justify-between h-full space-y-10 w-fit items-left">
            <TextDiv text="personal development" align="text-left border-l border-green-800" />
            <TextDiv text="networking opportunities" align="text-left border-l border-green-800" />
            <TextDiv text="global competitiveness" align="text-left border-l border-green-800" />
        </div>
    )
}
const TextDiv = ({text, align}) => {
    const text_styles = "border text-left px-2 py-1 border-green-800 capitalize font-bold";
    const { t } = useTranslation();
    return (
        <div 
        style={{backgroundColor: colors.bg_color}} 
        className={`${heading_font_size.subcontent} ${text_styles} ${align}`}>{t(text)}</div>
    )
}

const BottomSpan = () => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';
    return (
        <div className={`flex flex-col items-center justify-center w-full ${screen_specific[screen].height} `}>
            <div style={{borderColor: bg_color}} className={`${screen_specific[screen].height} border-l`}></div>
            <TextDiv text="adaptability and problem-solving" align="border-t" />
        </div>
    )
}

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