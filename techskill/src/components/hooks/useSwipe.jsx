import { useState } from "react";

const useSwipe = (slides) => {
  const [slideNum, setSlideNum] = useState(0);
  
  const handle_slide_left = () => {
    setSlideNum(slideNum > 0 ? slideNum - 1:  slides.length - 1);
  }
  const handle_slide_right = () => {
    setSlideNum(slideNum < slides.length - 1 ? slideNum + 1: 0)
  }
  const handle_slide_num = (num) => {
    setSlideNum(num)
  }

  return {handle_slide_left, handle_slide_right, handle_slide_num, slideNum};
}

export default useSwipe;

/*
  const [touchstartX, setTouchstartX] = useState(0);
  const [touchendX, setTouchendX] = useState(0);
  useEffect(() => {
    const get_swipe_direction = () => {
      if (touchendX < touchstartX) {
        // left
        setSlideNum(slideNum === 0 ? 10: slideNum - 1);
      } else if (touchendX > touchstartX) {
        // right
        setSlideNum(slideNum === 10 ? 0: slideNum + 1);
      }
    };
    const handle_touch_start = e => {
      setTouchstartX(e.changedTouches[0].screenX);
    };
    const handle_touch_end = e => {
      setTouchendX(e.changedTouches[0].screenX);
      get_swipe_direction();
    };
    window.addEventListener('touchstart', handle_touch_start, false);
    window.addEventListener('touchend', handle_touch_end, false);
    return () => {
      window.removeEventListener('touchstart', handle_touch_start);
      window.removeEventListener('touchend', handle_touch_end);
    }
  }, [slideNum]);
*/