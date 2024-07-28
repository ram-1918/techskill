import { useEffect, useState } from "react";
import useSwipe from "./hooks/useSwipe";

const BaseSlide = ({ children, image="bg-bg1", id }) => {
  // mobile:h-96 h-[40rem] w-[74rem] max-w-[74rem] mobile:w-[24rem]
  const screen = localStorage.getItem('screen');
  return (
    <section id={id} className={`
      desktop:w-[76rem] desktop:h-[42rem] laptop:w-[70rem] laptop:h-[42rem] tablet:w-[95%] tablet:h-[35.5rem]
      mobile:w-[95%] mobile:h-[32rem] small:w-[98%] small:h-[29rem]
      aspect-video mobile:aspect-square 
      px-10 py-5 mobile:px-2 small:px-2 mobile:py-2 mobile:gap-0
      tablet:gap-1
      bg-gradient-to-r from-cyan-100 to-pink-50 
      relative shadow-xl overflow-hidden rounded-2xl 
      flex flex-col justify-start items-center gap-5
    `}>
      {children}
      {/* {screen} */}
    </section>
  );
};

export default BaseSlide;