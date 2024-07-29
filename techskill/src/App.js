import { useEffect, useState } from "react";
import ScrollsSlidesView from "./components/ScrollSlidesView";
import SingleSlideView from "./components/SingleSlideView";
import Breakdown from "./sections/Breakdown";
import Home from "./sections/Home";
import Personality from "./sections/Personality";
import Placements from "./sections/Placements";
import Regions from "./sections/Regions";
import Reporting from "./sections/Reporting";
import SkillCheck from "./sections/SkillCheck";
import Technologies from "./sections/Technologies";
import { FullscreenIcon, ScrollIcon, SlideshowIcon } from "./components/icons";
import Why from "./sections/Why";
import Certifications from "./sections/Certifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faEye, faMaximize } from "@fortawesome/free-solid-svg-icons";
import { main_heading_fontstyle } from "./Base";
import Menu from "./sections/Menu";
import ThankYou from "./sections/Thankyou";

import './i18n';
import { useTranslation } from "react-i18next";
import useSwipe from "./components/hooks/useSwipe";

function App() {
  const [screen, setScreen] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 350 && width <= 640) {
        localStorage.setItem('screen', 'mobile');
        setScreen('mobile')
      } else if (width > 640 && width <= 1024) {
        localStorage.setItem('screen', 'tablet');
        setScreen('tablet');
      } else if (width > 1024 && width <= 1280) {
        localStorage.setItem('screen', 'laptop');
        setScreen('laptop');
      } else if (width > 1280) {
        localStorage.setItem('screen', 'desktop');
        setScreen('desktop');
      }
    };
  
    handleResize(); // Call it initially to set the value on mount
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slides = [
  <Home />, 
  <Menu />,
  <Why />,
  <Regions />, 
  <Technologies keys={['ai/ml', 'programming languages', 'cloud technologies']} />,
  <Certifications />,
  <Personality />,
  <SkillCheck />,
  <Placements />,
  <Reporting />,
  <Breakdown />,
  <ThankYou />
];
  return (
    <>
      {/* {JSON.stringify(localStorage.getItem('screen'))} */}
      {/* <div className="hidden mobile:block tablet:block">
        <SmallScreenView slides={slides} />
      </div> */}
      {/* <div className="bg-red-500"> */}
        <BigScreenView slides={slides} />
      {/* </div> */}
    </>
  );
}

const BigScreenView = ({slides}) => {
  const [isView, setIsView] = useState('scroll');
  const [isFullscreen, setIsFullscreen] = useState(false);
  return (
    <div style={{fontFamily: main_heading_fontstyle}} className="w-full h-full mobile:px-0 flex flex-col justify-start items-center space-y-5 bg-zinc-300 text-black">
      {!isFullscreen && <ViewOptions isView={isView} setIsView={setIsView} setIsFullscreen={setIsFullscreen} />}
      {isView === "single" && <SingleSlideView slides={slides} />}
      {isView === "scroll" && <ScrollsSlidesView slides={slides} />}
      {isView === "full" && <FullScreenView slides={slides} isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} setIsView={setIsView} />}
    </div>
  );
};

const ViewOptions = ({setIsView, isView, setIsFullscreen}) => {
  const { t, i18n } = useTranslation();
  const [currLang, setCurrLang] = useState('en');
  const active = 'bg-sky-300';
  const buttonstyles = 'px-2 py-1 rounded-lg cursor-pointer';
  const transButton = "cursor-pointer rounded-md py-1 px-2";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrLang(lng);
    localStorage.setItem('lang', lng);
  };

  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      setCurrLang(lang);
    }
  }, [setCurrLang]);

  return (
    <div className="
    flex justify-between items-center gap-8 
    desktop:w-[76rem] laptop:w-[70rem] tablet:w-[95%] mobile:w-[95%] small:w-[98%]
    desktop:flex-row laptop:flex-row tablet:flex-row small:flex-col 
    mobile:flex-col mobile:gap-1 small:gap-1 mobile:justify-start mobile:items-end
    ">
      <div className="flex justify-center items-center gap-2">
        <span >Translation: </span>
        <span className={`${transButton} ${currLang === 'en' && "bg-sky-400 text-black font-semibold"}`} onClick={() => changeLanguage('en')}>English</span> |
        <span className={`${transButton} ${currLang === 'te' && "bg-sky-400 text-black font-semibold"}`} onClick={() => changeLanguage('te')}>Telugu</span> |
        <span className={`${transButton} ${currLang === 'hi' && "bg-sky-400 text-black font-semibold"}`}onClick={() => changeLanguage('hi')}>Hindi</span>
      </div>
      <div className="flex justify-end items-center gap-2">
        <span className="text-black font-light text-lg"><FontAwesomeIcon icon={faEye} /> View: </span>
        <span onClick={() => setIsView('scroll')} className={`${isView === 'scroll' && active} ${buttonstyles} flex justify-between items-center w-8 h-8`}>{ScrollIcon}</span>
        <span onClick={() => setIsView('single')} className={`${isView === 'single' && active} ${buttonstyles} flex justify-between items-center w-10 h-10`}>{SlideshowIcon}</span>
        <span onClick={() => {setIsView('full'); setIsFullscreen(true)}} className={`${isView === 'full' && active} ${buttonstyles} flex justify-between items-center w-10 h-10`}>{FullscreenIcon}</span>
      </div>
    </div>
  )
}

export default App;

const slides_temp = {
  home: ({...props}) => <Home {...props} />,
  why: ({...props}) => <Why {...props} />,
  regions: ({...props}) => <Regions {...props} />,
  technologies: ({...props}) => <Technologies {...props} keys={['ai/ml', 'programming languages', 'cloud technologies']} />,
  certifications: ({...props}) => <Certifications {...props} />,
  personality: ({...props}) => <Personality {...props} />,
  skillcheck: ({...props}) => <SkillCheck {...props} />,
  placements: ({...props}) => <Placements {...props} />,
  reporting: ({...props}) => <Reporting {...props} />,
  breakdown: ({...props}) => <Breakdown {...props} />,
  thankyou: ({...props}) => <ThankYou {...props} />
}

const FullScreenView = ({slides, isFullscreen, setIsFullscreen, setIsView}) => {
  const slide_names = Object.keys(slides_temp);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setCurrentSlide((prevSlide) =>
          prevSlide === slide_names.length - 1 ? 0 : prevSlide + 1
        );
      } else if (event.key === 'ArrowLeft') {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? slide_names.length - 1 : prevSlide - 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
      {slides_temp[slide_names[currentSlide]]({isFullscreen, setIsFullscreen, setIsView})}
      <span onClick={() => setCurrentSlide(prev => prev === 0 ? slide_names.length - 1 : prev - 1)} className="absolute top-[50%] left-2">{currentSlide}<FontAwesomeIcon className="w-7 h-7" icon={faArrowLeft} /></span>
      <span onClick={() => setCurrentSlide(prev => prev === slide_names.length - 1 ? 0 : prev + 1)} className="absolute top-[50%] right-2"><FontAwesomeIcon className="w-7 h-7" icon={faArrowRight} /></span>

    </div>
  );
};

/*

+2000
-2000
+1200
+215
-67
-124
-38
+59.28 -59.28
-14.37
-11.70
+1175
+667
+108
-80.70

-2750: 108 x 2 + 667 x 2 + 1200



*/