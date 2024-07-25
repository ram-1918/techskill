import { heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { purposes } from "../components/data";
import Subhead from "../components/Subhead";

function Why({keys}) {
    const screen = localStorage.getItem('screen') || 'laptop';
  return (
        <BaseSlide>
            <BaseHeader text="Purpose of this program" />
            <BaseContentDiv text="7 essentials to initiate this program" >
                {keys.map(i => (
                    <div>
                        <span className="font-bold text-md leading-6 tracking-wide py-2 text-sky-600 underline underline-offset-2 uppercase" key={i}>{purposes[i].title}</span>
                        {purposes[i].content.map((content) => (
                            <div className="font-light text-md whitespace-pre-line">
                                <li className="list-inside" key={content.id}>
                                    <span className="font-semibold text-sky-900 pr-2 after:content-[':']">{content.title}</span>
                                    <span key={content.id} style={{fontSize:heading_font_size.subcontent[screen]}}>{content.text}</span>
                                </li>
                            </div>
                        ))}
                    </div>
                ))}
            </BaseContentDiv>
        </BaseSlide>
    );
}

export default Why;
