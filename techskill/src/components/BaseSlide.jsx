import { useEffect, useState } from "react";
import useSwipe from "./hooks/useSwipe";
import { colors, icon_sizes, slide_padding, slide_sizes } from "../Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

const BaseSlide = ({
  children,
  image = "bg-bg1",
  id,
  isFullscreen,
  setIsFullscreen,
  setIsView,
}) => {
  // mobile:h-96 h-[40rem] w-[74rem] max-w-[74rem] mobile:w-[24rem]
  const screen = localStorage.getItem("screen") || "medium-laptop";
  const [show, setShow] = useState(false);
  return (
    <section
      onClick={() => {
        setShow(prev => !prev);
      }}
      style={{
        width: isFullscreen && "100%",
        height: isFullscreen && "100vh",
        borderRadius: isFullscreen && "0",
        paddingLeft: isFullscreen && "100px",
        paddingRight: isFullscreen && "100px",
      }}
      id={id}
      className={`
      ${colors.main}
      medium-phone:p-4
      large-phone:p-4
      p-8
      relative shadow-lg shadow-[#526D82] overflow-hidden rounded-[1rem]
    `}
    >
      <div  className={`relative w-full h-full p-4 border border-purple-800 shadow-lg overflow-hidden rounded-[1rem] ${!isFullscreen && slide_padding} ${!isFullscreen && slide_sizes}`}>

        {/* flex flex-col justify-start items-center gap-5 */}
        {children}
        {isFullscreen && show && (
          <span
            className={`absolute bottom-10 left-[50%] cursor-pointer py-10`}
            onClick={() => {
              setIsFullscreen(false);
              setIsView("scroll");
            }}
          >
            <FontAwesomeIcon className={`${icon_sizes.small}`} icon={faMultiply} />
          </span>
      )}

      </div>
      {screen}
    </section>
  );
};

export default BaseSlide;

/*
    // e4953c = c66d00
    // bg-bg0 bg-cover bg-no-repeat bg-center
    // 460645 + ff5450 : violet + orange
    // bg-gradient-to-r from-[#FFC371] to-[#ff5988] ----
    // bg-borderframe bg-center bg-cover bg-no-repeat
    // bg-gradient-to-l from-[#BDC3C7] to-[#2c3e50] : Slate gray + black
    // bg-gradient-to-bl from-[#ff7e5f] to-[#feb474]
    // bg-gradient-to-bl from-[#fc4a1a] to-[#F7B733] : yellow + orange
    // bg-gradient-to-bl from-[#A1FFCE] to-[#FAFFD1] : light green + green
    // bg-gradient-to-bl from-[#ffe998] to-[#57370d] : yollow + gold
    // bg-gradient-to-tr from-[#ffc2c2] to-[#ff5450] : light pink. + dark pink
    // bg-gradient-to-r from-[#ffde50] to-[#e45d0b] : Yellow + orange
    // bg-gradient-to-r from-[#ff5988] to-[#500c7f] : pink + Violet
    // bg-gradient-to-r from-[#ff4a64] to-[#71244e] : Red
    // bg-gradient-to-r from-[#ff8859] to-[#d02d7f : Red + Pink
    // bg-gradient-to-r from-[#CD7F32] to-[#FFC371] : Orange
    // bg-gradient-to-r from-[#E66C2C] to-[#EFB261]
    // bg-gradient-to-r from-[#C36241] to-[#DEAA88]
*/
