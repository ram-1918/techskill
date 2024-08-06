import { heading_font_size, image_size_essential } from "../Base";
import { colors } from "../Base";
import { useTranslation } from "react-i18next";

const screen_specific = {
    '5k-monitor': {
        width: 'w-[20rem]',
        height: 'h-[15rem]',
        innerwidth: 'w-[10rem]',
        padding: 'py-[2.8rem]'
    },
    'ultra-wide': {
        width: 'w-[18rem]',
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
        height: 'h-[4rem]',
        innerwidth: 'w-[3.5rem]',
        padding: 'py-[1.7rem]'
    },
    'small-laptop': {
        width: 'w-[6rem]',
        height: 'h-[3rem]',
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
    'medium-phone': {
        width: 'w-[1rem]',
        height: 'h-[0.9rem]',
        innerwidth: 'w-[0.4rem]',
        padding: 'py-[0.3rem]'
    },
    'small-phone': {
        width: 'w-[1rem]',
        height: 'h-[2rem]',
        innerwidth: 'w-[1.2rem]',
        padding: 'py-[0.3rem]'
    },
}

const bg_color = "#27374D"

export const FutureImg = () => <div className={`${image_size_essential} bg-center bg-cover shadow-lg  rounded-xl bg-future`}></div>

export const Span = ({border="border-l-2"}) => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';

    return (
        <div className={` ${screen_specific[screen].width} h-full flex flex-col justify-between items-center space-y-4 py-10 large-phone:py-10`}>
            <div style={{borderColor: bg_color}} className={`w-full h-[25%] border-b ${border} border-black`}></div>
            <MiddleLine />
            <div style={{borderColor: bg_color}} className={`w-full h-[25%] border-t ${border}`}></div>
        </div>
    )
}


export const MiddleLine = () => {
    return (
        <div className="w-full h-[33.33%] flex flex-col justify-center items-center">
            <div style={{borderColor: bg_color}} className="w-full border-t-2"></div>
        </div>
    )
};

export const Edges = () => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';

    return (
        <div className={`h-full ${screen_specific[screen].innerwidth}  flex flex-col justify-between items-center py-10 `}>
            <div style={{borderColor: bg_color}} className="w-full h-[25%] border-t-2"></div>
            {/* <div style={{borderColor: bg_color}} className="w-full h-1 border-t-4"></div> */}
            <MiddleLine />
            <div style={{borderColor: bg_color}} className="w-full h-[25%] border-b-2"></div>
        </div>
    )
}


export const LeftData = () => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';

    return (
        // <div className={` h-full flex flex-col justify-around items-center bg-red-500 space-y-4 py-0`}>
        //     <div style={{borderColor: bg_color}} className={`w-full h-[28%] bg-blue-400 border-b-2 border-l-2 border-black`}>
        //         <TextDiv text="meeting industry requirements" align="text-right border-r border-green-800" />
        //     </div>
        //     <div style={{borderColor: bg_color}} className="flex flex-col items-center justify-center w-full h-[33.33%]">
        //         <TextDiv text="enhancing employabilites" align="text-right border-r border-green-800" />
        //     </div>
        //     {/* <MiddleLine /> */}
        //     <div style={{borderColor: bg_color}} className={`w-full h-[28%] flex flex-col items-center justify-end bg-blue-400 border-t-2 border-l-2`}>
        //         <TextDiv text="adapting to technological changes" align="text-right border-r border-green-800" />
        //     </div>
        // </div>
        <div className="flex flex-col justify-between h-full py-5 w-fit items-right large-phone:py-10 large-phone:space-y-1">
            <TextDiv text="meeting industry requirements" align="text-right" />
            <TextDiv text="enhancing employabilites" align="text-right" />
            <TextDiv text="adapting to technological changes" align="text-right" />
        </div>
    )
}

export const RightData = () => {
    return (
        <div className="flex flex-col justify-between h-full py-5 w-fit items-right large-phone:py-10 large-phone:space-y-1">
            <TextDiv text="personal development" align="text-left w-full" />
            <TextDiv text="networking opportunities" align="text-left w-full" />
            <TextDiv text="global competitiveness" align="text-left w-full" />
        </div>
    )
}
export const TextDiv = ({text, align}) => {
    const text_styles = "border text-left px-2 py-1 border-green-800 capitalize font-bold bg-orange-100";
    const { t } = useTranslation();
    return (
        <div 

        className={`${heading_font_size.subcontent} ${text_styles} ${align}`}>{t(text)}</div>
    )
}

// style={{backgroundColor: colors.bg_color}} 

export const BottomSpan = () => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';
    return (
        <div className={`relative flex flex-col items-center justify-center w-full ${screen_specific[screen].height} `}>
            <div style={{borderColor: bg_color}} className={`${screen_specific[screen].height} border-l z-10`}></div>
            <TextDiv text="adaptability and problem-solving" align="w-fit text-center z-20 bg-orange-100" />
        </div>
    )
}