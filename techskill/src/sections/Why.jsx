import { heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { purposes } from "../components/data";
import { colors } from "../Base";
import list_icon from '../assets/icons/next.png'

function Why({keys}) {
    const screen = localStorage.getItem('screen') || 'laptop';
  return (
        <BaseSlide>
            <BaseHeader text="Purpose of this program" />
            <BaseContentDiv text="7 essentials to initiate this program" >
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
            </BaseContentDiv>
        </BaseSlide>
    );
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
