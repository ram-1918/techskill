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
import { ScrollIcon, SlideshowIcon } from "./components/icons";
import Why from "./sections/Why";
import Certifications from "./sections/Certifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { main_heading_fontstyle } from "./Base";
import Menu from "./sections/Menu";
import ThankYou from "./sections/Thankyou";

import './i18n';
import { useTranslation } from "react-i18next";

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
  return (
    <div style={{fontFamily: main_heading_fontstyle}} className="mobile:px-0 flex flex-col justify-start items-center space-y-5 py-10 bg-zinc-300 text-black">
      {/* <ViewOptions isView={isView} setIsView={setIsView} /> */}
      {isView === "single" && <SingleSlideView slides={slides} />}
      {isView === "scroll" && <ScrollsSlidesView slides={slides} />}
    </div>
  );
};

const ViewOptions = ({setIsView, isView}) => {
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
    <div className="flex justify-end items-center gap-8">
      <div className="flex justify-center items-center gap-2">
        <span >Translation: </span>
        <span className={`${transButton} ${currLang === 'en' && "bg-sky-400 text-black font-semibold"}`} onClick={() => changeLanguage('en')}>English</span> |
        <span className={`${transButton} ${currLang === 'te' && "bg-sky-400 text-black font-semibold"}`} onClick={() => changeLanguage('te')}>Telugu</span> |
        <span className={`${transButton} ${currLang === 'hi' && "bg-sky-400 text-black font-semibold"}`}onClick={() => changeLanguage('hi')}>Hindi</span>
      </div>
      <div className="flex justify-end items-center gap-2">
        <span className="text-black font-light text-lg"><FontAwesomeIcon icon={faEye} /> View: </span>
        <span onClick={() => setIsView('scroll')} className={`${isView === 'scroll' && active} ${buttonstyles} flex hustify-between items-center w-8 h-8`}>{ScrollIcon}</span>
        <span onClick={() => setIsView('single')} className={`${isView === 'single' && active} ${buttonstyles} flex hustify-between items-center w-10 h-10`}>{SlideshowIcon}</span>
      </div>
    </div>
  )
}

export default App;

const SmallScreenView = ({slides}) => {
  return (
    <SingleSlideView slides={slides} />
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