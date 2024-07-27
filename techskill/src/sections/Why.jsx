import { heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { purposes } from "../components/data";
import { colors } from "../Base";
import list_icon from '../assets/icons/next.png'

function Why({keys}) {
  return (
        <BaseSlide image="bg-bg2" id="why">
            <BaseHeader text="Skill Development program after graduation" />
            <BaseContentDiv text="7 Essentials for higher emplpoyment rate" >
            <Concepts />
            {/* <WhyBackup keys={keys} /> */}
            </BaseContentDiv>
        </BaseSlide>
    );
}

const bg_color = "#0d9488"

const Concepts = () => {
    return (
        <div className="mobile:hidden w-full flex flex-col justify-center items-center">
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
        <div className="w-[4.5rem] h-full flex flex-col justify-around items-center py-0">
            <div style={{borderColor: bg_color}} className="w-full h-16 border-b border-l"></div>
            <div style={{borderColor: bg_color}} className="w-full border-t"></div>
            <div style={{borderColor: bg_color}} className="w-full h-16 border-t border-l"></div>
        </div>
    )
}

const RightSpan = () => {
    return (
        <div className="w-24 h-full flex flex-col justify-around items-center space-y-4 py-3">
            <div style={{borderColor: bg_color}} className="w-full h-16 border-b border-r"></div>
            <MiddleLine />
            <div style={{borderColor: bg_color}} className="w-full h-16 border-t border-r"></div>
        </div>
    )
}
const FutureImg = () => <div className="w-56 h-56 rounded-xl shadow-lg bg-future bg-cover bg-center"></div>

const MiddleLine = () => {
    return (
        <div className="w-full h-[33.33%] flex flex-col justify-center items-center">
            <div style={{borderColor: bg_color}} className="w-full border-t"></div>
        </div>
    )
};

const RightEdges = () => {
    return (
        <div className="h-full w-10 flex flex-col justify-between items-center py-3">
            <div style={{borderColor: bg_color}} className="h-1 w-full border-t"></div>
            <div style={{borderColor: bg_color}} className="w-full border-t"></div>
            <div style={{borderColor: bg_color}} className="h-1 w-full border-b"></div>
        </div>
    )
}

const LeftEdges = () => {
    return (
        <div className="h-full w-10 flex flex-col justify-around items-center py-0">
            <div style={{borderColor: bg_color}} className="h-16 w-full border-t"></div>
            <div style={{borderColor: bg_color}} className="w-full border-t"></div>
            <div style={{borderColor: bg_color}} className="h-16 w-full border-b"></div>
        </div>
    )
}

const LeftData = () => {
    return (
        <div className="w-fit h-full  flex flex-col justify-between items-right">
            <TextDiv text="ADAPTING TO TECHNOLOGICAL CHANGES" align="text-right border-r border-green-800" />
            <TextDiv text="MEETING INDUSTRY REQUIREMENTS" align="text-right border-r border-green-800" />
            <TextDiv text="ENHANCING EMPLOYABILITYS" align="text-right border-r border-green-800" />
        </div>
    )
}

const RightData = () => {
    return (
        <div className="w-fit h-full  flex flex-col justify-between items-left space-y-10">
            <TextDiv text="PERSONAL DEVELOPMENT" align="text-left border-l border-green-800" />
            <TextDiv text="NETWORKING OPPORTUNITIES" align="text-left border-l border-green-800" />
            <TextDiv text="GLOBAL COMPETITIVENESS" align="text-left border-l border-green-800" />
        </div>
    )
}
const TextDiv = ({text, align}) => {
    const text_styles = "text-left px-1.5 py-1 text-[0.9rem] border-green-800 font-bold";
    const screen = localStorage.getItem('screen') || 'laptop';
    return (
        <div styles={{fontSize: heading_font_size.content[screen]}} className={`${text_styles} ${align}`}>{text}</div>
    )
}

const BottomSpan = () => {
    return (
        <div className="h-20 w-full flex flex-col justify-center items-center">
            <div style={{borderColor: bg_color}} className="h-16 border-l"></div>
            <TextDiv text="ADAPTABILITY AND PROBLEM-SOLVING" align="border-t" />
        </div>
    )
}

const WhyBackup = ({keys}) => {
    return (
        <div className="w-full flex flex-col items-start justify-start overflow-scroll">
            {keys.map(i => (
                <div className="">
                    <Title key={i} title={purposes[i].title} />
                    {purposes[i].content.map((content) => (
                        <Listitems data={content} />
                    ))}
                </div>
            ))}
        </div>
    )
}

const Listitems = ({data}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    return (
        <div className="list-style-none mobile:leading-3 mobile:tracking-tight flex justify-start items-start space-x-1" key={data.id}>
            <img className="w-5 h-5" src={list_icon} alt="list" />
            <span key={data.id} style={{fontSize:heading_font_size.subcontent[screen], color: colors.subcontent}}>
            <span style={{color: colors.subcontent, fontSize:heading_font_size.subcontent[screen]}} className="font-semibold  pr-1 after:content-[':']">{data.title}</span> {data.text}
            </span>
        </div>
    )
}

const Title = ({title}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    return (
        <span 
        style={{color: colors.main, fontSize:heading_font_size.content[screen]}} 
        className="font-bold text-md leading-6 tracking-wide py-2 text-sky-600 underline underline-offset-2 uppercase">
            {title}
        </span>
    )
}

export default Why;
