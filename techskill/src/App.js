import { useEffect, useState } from "react";
import ScrollsSlidesView from "./components/ScrollSlidesView";
import SingleSlideView from "./components/SingleSlideView";
import About from "./sections/About";
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

function App() {
  const [screen, setScreen] = useState('');
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 350 && width <= 640) {
        localStorage.setItem('screen', 'mobile');
        setScreen('mobile')
      } else if (width > 640 && width <= 1000) {
        localStorage.setItem('screen', 'tablet');
        setScreen('tablet');
      } else if (width > 1000 && width <= 1279) {
        localStorage.setItem('screen', 'laptop');
        setScreen('laptop');
      } else if (width >= 1280) {
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
  <Why keys={[0,1,2]} />,
  <Why keys={[4,5,6,7]} />,
  <Regions />, 
  <Technologies keys={['cloud technologies', 'ai/ml', 'programming languages']} />,
  <Certifications />,
  <Personality />,
  <SkillCheck />,
  <Placements />,
  <Reporting />,
  <Breakdown />,
  // <About />
];
  return (
    <>
      {/* {JSON.stringify(localStorage.getItem('screen'))} */}
      <div className="hidden mobile:block tablet:block">
        <SmallScreenView slides={slides} />
      </div>
      <div className="hidden laptop:block desktop:block">
        <BigScreenView slides={slides} />
      </div>
    </>
  );
}

const SmallScreenView = ({slides}) => {
  return (
    <SingleSlideView slides={slides} />
  );
};

const BigScreenView = ({slides}) => {
  const [isView, setIsView] = useState('scroll');
  return (
    <div className="mobile:px-0 flex flex-col justify-start items-center space-y-5 py-10 bg-gray-200 text-white">
      <ViewOptions isView={isView} setIsView={setIsView} />
      {isView === "single" && <SingleSlideView slides={slides} />}
      {isView === "scroll" && <ScrollsSlidesView slides={slides} />}
    </div>
  )
}

const ViewOptions = ({setIsView, isView}) => {
  const active = 'bg-sky-300';
  const buttonstyles = 'px-2 py-1 rounded-lg cursor-pointer'
  return (
    // <div className="w-[74rem] flex justify-end items-center gap-2">
    <div className="w-[64rem] flex justify-end items-center gap-2">
      <span className="text-black font-light text-lg"><FontAwesomeIcon icon={faEye} /> View: </span>
      <span onClick={() => setIsView('scroll')} className={`${isView === 'scroll' && active} ${buttonstyles} flex hustify-between items-center w-8 h-8`}>{ScrollIcon}</span>
      <span onClick={() => setIsView('single')} className={`${isView === 'single' && active} ${buttonstyles} flex hustify-between items-center w-10 h-10`}>{SlideshowIcon}</span>
    </div>
  )
}

export default App;



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