import { heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { purposes } from "../components/data";
import Subhead from "../components/Subhead";
import { colors } from "../Base";

function Why({keys}) {
    const screen = localStorage.getItem('screen') || 'laptop';
  return (
        <BaseSlide>
            <BaseHeader text="Purpose of this program" />
            <BaseContentDiv text="7 essentials to initiate this program" >
                {keys.map(i => (
                    <div>
                        <span style={{color: colors.main}} className="font-bold text-md leading-6 tracking-wide py-2 text-sky-600 underline underline-offset-2 uppercase" key={i}>{purposes[i].title}</span>
                        {purposes[i].content.map((content) => (
                            <div className="font-light text-md whitespace-pre-line">
                                <li className="list-inside" key={content.id}>
                                    <span style={{color: colors.subcontent}} className="font-semibold  pr-2 after:content-[':']">{content.title}</span>
                                    <span key={content.id} style={{fontSize:heading_font_size.subcontent[screen], color: colors.subcontent}}>{content.text}</span>
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
