import { color1, colors, heading_font_size, main_heading_fontstyle } from "../Base";

const Heading = ({ text, type }) => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <span
      style={{
        fontFamily: main_heading_fontstyle,
        color: type !== 'main' && colors[type],
        fontSize: heading_font_size[type][screen]
      }}
      className="leading-7 tracking-wide capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-orange-600"
    >
      {text} 
    </span>
  );
};

export default Heading;
