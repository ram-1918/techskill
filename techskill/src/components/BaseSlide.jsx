import { useEffect, useState } from "react";
import useSwipe from "./hooks/useSwipe";
import { slide_padding, slide_sizes } from "../Base";

const BaseSlide = ({
  children,
  image = "bg-bg1",
  id,
  isFullscreen,
  setIsFullscreen,
  setIsView,
}) => {
  // mobile:h-96 h-[40rem] w-[74rem] max-w-[74rem] mobile:w-[24rem]
  const screen = localStorage.getItem("screen");
  const [show, setShow] = useState(false);
  return (
    <section
      onClick={() => {
        setShow(true);
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
      px-2 py-2 
      bg-gradient-to-r from-cyan-100 to-pink-50 
      relative shadow-xl overflow-hidden rounded-4xl 
      flex flex-col justify-start items-center gap-5
    `}
    >
      {children}
      {isFullscreen && show && (
        <span
          onClick={() => {
            setIsFullscreen(false);
            setIsView("scroll");
          }}
        >
          minimize
        </span>
      )}
      {screen}
    </section>
  );
};

export default BaseSlide;
