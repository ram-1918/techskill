import { useState } from "react";
import { DotIcon } from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useSwipe from "./hooks/useSwipe";

const SingleSlideView = ({slides}) => {
    // const [slideNum, setSlideNum] = useState(0);
    const {handle_slide_left, handle_slide_right, handle_slide_num, slideNum} = useSwipe(slides);

    return (
    <div className="mobile:h-[44rem] mobile:flex flex-col justify-center items-center px-2 space-y-4 text-black">
        {slides[slideNum]}
        <Navigation slides={slides} slideNum={slideNum} handle_slide_left={handle_slide_left} handle_slide_right={handle_slide_right} handle_slide_num={handle_slide_num} />
      </div>
    );
  };

  const Navigation = ({handle_slide_left, handle_slide_right, handle_slide_num, slides, slideNum}) => {
    return (
      <div className="w-full flex justify-between px-2 space-x-10 z-10">
        <span className="cursor-pointer text-black" onClick={() => handle_slide_left()}><FontAwesomeIcon icon={faArrowLeft} /></span>
        <PageNums slides={slides} handle_slide_num={handle_slide_num} slideNum={slideNum} />
        <span className="cursor-pointer text-black" onClick={() => handle_slide_right()}><FontAwesomeIcon icon={faArrowRight} /> </span>
    </div>
    )
  }

  const PageNums = ({slides, setSlideNum, slideNum, handle_slide_num}) => {
    return (
        <span className="flex justify-center items-center space-x-1">
            {slides.map((_, idx) => <span className={`${idx === slideNum && 'border border-sky-500 rounded-full'} cursor-pointer`} onClick={() => handle_slide_num(idx)}>{DotIcon}</span>)}
        </span>
    )
  }

export default SingleSlideView;