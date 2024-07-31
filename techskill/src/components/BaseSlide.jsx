import { useEffect, useState } from "react";
import useSwipe from "./hooks/useSwipe";
import { icon_sizes, slide_padding, slide_sizes } from "../Base";
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
        ${!isFullscreen && slide_sizes}
        ${!isFullscreen && slide_padding}
      px-2 py-4 
      bg-gradient-to-tl from-[hsl(0,0%,100%)] via-white to-[#fefdff]
      relative shadow-xl shadow-blue-200 overflow-hidden rounded-[1rem] border-4 border-gray-200
      flex flex-col justify-start items-center gap-5
    `}
    // bg-bg0 bg-cover bg-no-repeat bg-center
    // bg-gradient-to-r from-[#E66C2C] to-[#EFB261]
    // bg-gradient-to-r from-[#C36241] to-[#DEAA88]
    >
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
      {screen}
    </section>
  );
};

export default BaseSlide;
