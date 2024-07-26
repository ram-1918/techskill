import { color1, colors, heading_font_size, main_heading_fontstyle } from "../Base";

const Heading = ({ text, type }) => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <span
      style={{
        fontFamily: main_heading_fontstyle,
        color: type !== 'main' && colors[type],
        fontWeight: type !== 'main' && "600",
        fontSize: heading_font_size[type][screen]
      }}
      className="leading-7 mobile:py-0 tracking-tight capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-orange-400"
    >
      {text} 
    </span>
  );
};

export default Heading;
