import { useState } from "react";
import { DotIcon } from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useSwipe from "./hooks/useSwipe";
import { icon_sizes, slide_widths } from "../Base";

const SingleSlideView = ({slides}) => {
    // const [slideNum, setSlideNum] = useState(0);
    const {handle_slide_left, handle_slide_right, handle_slide_num, slideNum} = useSwipe(slides);

    return (
    <div className="flex-col items-center justify-center w-full min-h-[100vh] px-2 space-y-4 text-black mobile:flex">
        <div className="flex items-center justify-center w-full">
          {slides[slideNum]}
        </div>
        <div className="flex items-center justify-center w-full">
          <Navigation slides={slides} slideNum={slideNum} handle_slide_left={handle_slide_left} handle_slide_right={handle_slide_right} handle_slide_num={handle_slide_num} />
        </div>
      </div>
    );
  };

  const Navigation = ({handle_slide_left, handle_slide_right, handle_slide_num, slides, slideNum}) => {
    return (
      <div className={`
        ${slide_widths}
      w-full flex justify-between px-2 space-x-10 z-10
      `}>
        <span className="text-black cursor-pointer" onClick={() => handle_slide_left()}><FontAwesomeIcon className={`${icon_sizes.small}`} icon={faArrowLeft} /></span>
        <PageNums slides={slides} handle_slide_num={handle_slide_num} slideNum={slideNum} />
        <span className="text-black cursor-pointer" onClick={() => handle_slide_right()}><FontAwesomeIcon className={`${icon_sizes.small}`} icon={faArrowRight} /> </span>
    </div>
    )
  }

  const PageNums = ({slides, setSlideNum, slideNum, handle_slide_num}) => {
    return (
        <span className="flex items-center justify-center space-x-1">
            {slides.map((_, idx) => <span className={`${icon_sizes.small} ${idx === slideNum && 'border border-sky-500 rounded-full'} cursor-pointer`} onClick={() => handle_slide_num(idx)}>{DotIcon}</span>)}
        </span>
    )
  }

export default SingleSlideView;