import { useEffect, useState } from "react";
import useSwipe from "./hooks/useSwipe";

const BaseSlide = ({ children, image="bg-bg1", id }) => {
  // mobile:h-96 h-[40rem] w-[74rem] max-w-[74rem] mobile:w-[24rem]
  return (
    <section id={id} className={`px-[6%] py-5 w-[79.98rem] h-[45rem] aspect-video mobile:aspect-square bg-gradient-to-r from-cyan-100 to-pink-50 relative bg-red-100 shadow-xl overflow-hidden rounded-2xl flex flex-col justify-start items-center gap-5`}>
      {children}
    </section>
  );
};

export default BaseSlide;