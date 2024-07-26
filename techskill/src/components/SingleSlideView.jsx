import { useState } from "react";
import { DotIcon } from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SingleSlideView = ({slides}) => {
    const [slideNum, setSlideNum] = useState(0);
    return (
    <div className="mobile:h-[44rem] mobile:flex flex-col justify-center items-center px-2 space-y-4 text-white">
        {slides[slideNum]}
        <Navigation slides={slides} slideNum={slideNum} setSlideNum={setSlideNum} />
      </div>
    );
  };

  const Navigation = ({setSlideNum, slides, slideNum}) => {
    return (
      <div className="w-full flex justify-between px-2 space-x-10">
        <span className="cursor-pointer text-black" onClick={() => setSlideNum(slideNum > 0 ? slideNum - 1: slides.length - 1)}><FontAwesomeIcon icon={faArrowLeft} /></span>
        <PageNums slides={slides} setSlideNum={setSlideNum} slideNum={slideNum} />
        <span className="cursor-pointer text-black" onClick={() => setSlideNum(slideNum < slides.length - 1 ? slideNum + 1: 0)}><FontAwesomeIcon icon={faArrowRight} /> </span>
    </div>
    )
  }

  const PageNums = ({slides, setSlideNum, slideNum}) => {
    return (
        <span className="flex justify-center items-center space-x-1">
            {slides.map((_, idx) => <span className={`${idx === slideNum && 'border border-sky-500 rounded-full'} cursor-pointer`} onClick={() => setSlideNum(idx)}>{DotIcon}</span>)}
        </span>
    )
  }

export default SingleSlideView;