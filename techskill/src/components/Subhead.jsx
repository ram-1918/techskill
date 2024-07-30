import { useEffect, useRef, useState } from "react";
import { colors, heading_font_size, sub_heading_fontstyle } from "../Base";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCogs} from '@fortawesome/free-solid-svg-icons';
import { DesignIcon } from "./icons";
import { useTranslation } from "react-i18next";

const Subhead = ({ text }) => {
  const divRef = useRef(null);
  const [divWidth, setDivWidth] = useState(0);

  useEffect(() => {
      const handle_resize = () => {
          if(divRef.current) {
                setDivWidth(divRef.current.clientWidth);
          }
      };
      window.addEventListener('resize', handle_resize);
      handle_resize();
      return () => {
          window.removeEventListener('resize', handle_resize);
      }
  }, [divRef]);
  return (
    <div className="flex flex-col items-center justify-center w-full py-2">
        <Head divRef={divRef} text={text} />
        <UnderlineDesign divWidth={divWidth} />
    </div>
  );
};

const Head = ({text, divRef}) => {
    const screen = localStorage.getItem("screen") || "medium-laptop";
    const styles = "text-center font-semibold text-orange-700 uppercase";
    const { t } = useTranslation();
    return (
        <span
            ref = {divRef}
            style={{ 
                // fontSize: heading_font_size.sub[screen], 
                // fontFamily: sub_heading_fontstyle,
                color: colors.sub 
            }}
            className={`${styles} ${heading_font_size.sub}`}
            >
            {t(text)}
        </span>
    )
};

const UnderlineDesign = ({divWidth}) => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';
    return (
        <div style={{fontSize: heading_font_size.content[screen]}} className="flex items-center justify-center space-x-2">
            <span style={{width: divWidth/3}} className={`h-1 bg-[#9DB2BF]`}></span>
            <span className={`${heading_font_size.content}`}>{<FontAwesomeIcon icon={faCogs} />}</span>
            <span style={{width: divWidth/3}} className={`h-1 bg-[#9DB2BF]`}></span>
        </div>
    );
};

export default Subhead;
