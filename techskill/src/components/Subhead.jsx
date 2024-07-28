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
    <div className="w-full flex flex-col justify-center items-center py-2">
        <Head divRef={divRef} text={text} />
        <UnderlineDesign divWidth={divWidth} />
    </div>
  );
};

const Head = ({text, divRef}) => {
    const screen = localStorage.getItem("screen") || "laptop";
    const styles = "text-center font-semibold text-orange-700 uppercase";
    const { t } = useTranslation();
    return (
        <span
            ref = {divRef}
            style={{ 
                fontSize: heading_font_size.sub[screen], 
                // fontFamily: sub_heading_fontstyle,
                color: colors.sub 
            }}
            className={styles}
            >
            {t(text)}
        </span>
    )
};

const UnderlineDesign = ({divWidth}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    return (
        <div style={{fontSize: heading_font_size.content[screen]}} className="flex justify-center items-center space-x-2">
            <span style={{width: divWidth/3}} className={`h-0.5 bg-[#9DB2BF]`}></span>
            <span className={``}>{<FontAwesomeIcon icon={faCogs} />}</span>
            <span style={{width: divWidth/3}} className={`h-0.5 bg-[#9DB2BF]`}></span>
        </div>
    );
};

export default Subhead;
