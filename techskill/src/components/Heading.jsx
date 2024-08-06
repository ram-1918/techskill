import { useTranslation } from "react-i18next";
import { color1, colors, heading_font_size, main_heading_fontstyle } from "../Base";

const Heading = ({ text, type = 'main' }) => {
  return (
    type === 'main' ? <MainHead text={text} />: <NormalText text={text} type={type} />
  );
};

const MainHead = ({text}) => {
  const screen = localStorage.getItem("screen") || "medium-laptop";
  const { t } = useTranslation();

  return (
    <div
      style={{
        // fontFamily: main_heading_fontstyle,
        // fontSize: heading_font_size['main'][screen]
      }}
      className={`
        ${heading_font_size.main}
        ${colors.textgradient}
        font-bold tracking-tighter text-center capitalize
        `}
    >
      <span className={` py-10 leading-6`}>{t(text)}</span>
    </div>
    // text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCFB] via-[#FDFCFB] to-[#E2D1C3]
    // text-transparent bg-clip-text bg-gradient-to-r from-[#09203F] via-[#1D2671] to-[#C33764]
  )
}

const NormalText = ({text, type}) => {
  const screen = localStorage.getItem("screen") || "medium-laptop";
  const { t } = useTranslation();

  return (
    <span
      style={{
        // fontFamily: main_heading_fontstyle,
        color: colors[type],
        fontWeight: type === 'sub' ? "700": "600",
      }}
      className={`
        ${heading_font_size[type]}
         tracking-tight capitalize
      `}
      >
      {t(text)}
    </span>
  )
}

export default Heading;
