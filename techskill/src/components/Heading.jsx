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
        font-bold tracking-tighter text-center capitalize
        `}
    >
      <span className="py-10 leading-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-teal-600">{t(text)}</span>
    </div>
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
      leading-7 tracking-tight capitalize
      `}
      >
      {t(text)}
    </span>
  )
}

export default Heading;
