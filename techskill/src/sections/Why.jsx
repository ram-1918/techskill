import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { purposes } from "../components/data";

function Why({keys}) {
  return (
        <BaseSlide>
            <BaseHeader text="Purpose of this program" />
            <div className="flex flex-col justify-start items-start gap-2">
            {keys.map(i => (
                <div>
                    <span className="font-bold text- underline underline-offset-2 uppercase" key={i}>{purposes[i].title}</span>
                    {purposes[i].content.map((content) => (
                        <div className="font-light text-md whitespace-pre-line">
                            <li className="list-inside" key={content.id}>
                                <span className="font-semibold pr-2 after:content-[':']">{content.title}</span>
                                <span key={content.id}>{content.text}</span>
                            </li>
                        </div>
                    ))}
                </div>
            ))}
            </div>
        </BaseSlide>
    );
}

export default Why;
