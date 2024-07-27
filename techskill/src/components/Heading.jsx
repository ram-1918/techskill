import { color1, colors, heading_font_size, main_heading_fontstyle } from "../Base";

const Heading = ({ text, type }) => {
  return (
    type === 'main' ? <MainHead text={text} />: <NormalText text={text} type={type} />
  );
};

const MainHead = ({text}) => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <span
      style={{
        fontFamily: main_heading_fontstyle,
        fontSize: heading_font_size['main'][screen]
      }}
      className="leading-7 py-2 tracking-tighter capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-teal-600"
    >
      {text} 
    </span>
  )
}

const NormalText = ({text, type}) => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <span
      style={{
        fontFamily: main_heading_fontstyle,
        color: colors[type],
        fontWeight: "600",
        fontSize: heading_font_size[type][screen]
      }}
      className="leading-7 -py-1 tracking-tighter capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-500"
    >
      {text} 
    </span>
  )
}

export default Heading;
