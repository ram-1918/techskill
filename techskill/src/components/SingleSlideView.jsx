import { useState } from "react";
import { DotIcon } from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SingleSlideView = ({slides}) => {
    const [slideNum, setSlideNum] = useState(0);
    return (
    //   <div className="px-[15%] py-10 space-y-5 select-none">
    <>
        {slides[slideNum]}
        <div className="w-full flex justify-between px-2">
            <span className="cursor-pointer" onClick={() => setSlideNum(slideNum > 0 ? slideNum - 1: slides.length - 1)}><FontAwesomeIcon icon={faArrowLeft} /></span>
            <PageNums slides={slides} setSlideNum={setSlideNum} slideNum={slideNum} />
            <span className="cursor-pointer" onClick={() => setSlideNum(slideNum < slides.length - 1 ? slideNum + 1: 0)}><FontAwesomeIcon icon={faArrowRight} /> </span>
        </div>
      </>
    );
  };

  const PageNums = ({slides, setSlideNum, slideNum}) => {
    return (
        <span className="flex justify-center items-center space-x-1">
            {slides.map((_, idx) => <span className={`${idx === slideNum && 'border border-sky-500 rounded-full'} cursor-pointer`} onClick={() => setSlideNum(idx)}>{DotIcon}</span>)}
        </span>
    )
  }

export default SingleSlideView;