import {
  faArrowLeft,
  faArrowRight,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { heading_font_size, icon_sizes, main_heading_fontstyle, slide_widths } from "./Base";
import { FullscreenIcon, ScrollIcon, SlideshowIcon } from "./components/icons";
import ScrollsSlidesView from "./components/ScrollSlidesView";
import SingleSlideView from "./components/SingleSlideView";
import Breakdown from "./sections/Breakdown";
import Certifications from "./sections/Certifications";
import Home from "./sections/Home";
import Menu from "./sections/Menu";
import Personality from "./sections/Personality";
import Placements from "./sections/Placements";
import Regions from "./sections/Regions";
import Reporting from "./sections/Reporting";
import SkillCheck from "./sections/SkillCheck";
import Technologies from "./sections/Technologies";
import ThankYou from "./sections/Thankyou";
import Why from "./sections/Why";

import { useTranslation } from "react-i18next";
import "./i18n";
import About from "./sections/About";

function App() {
  const [, setScreen] = useState("");

  /*
const handleResize = () => {
  const width = window.innerWidth;
  if (width >= 320 && width <= 360) {
    localStorage.setItem("screen", "small-phone");
    setScreen("small-phone");
  } else if (width >= 361 && width <= 414) {
    localStorage.setItem("screen", "medium-phone");
    setScreen("medium-phone");
  } else if (width >= 415 && width <= 480) {
    localStorage.setItem("screen", "large-phone");
    setScreen("large-phone");
  } else if (width >= 481 && width <= 768) {
    localStorage.setItem("screen", "small-tablet");
    setScreen("small-tablet");
  } else if (width >= 769 && width <= 1024) {
    localStorage.setItem("screen", "large-tablet");
    setScreen("large-tablet");
  } else if (width >= 1025 && width <= 1280) {
    localStorage.setItem("screen", "small-laptop");
    setScreen("small-laptop");
  } else if (width >= 1281 && width <= 1440) {
    localStorage.setItem("screen", "medium-laptop");
    setScreen("medium-laptop");
  } else if (width >= 1441 && width <= 1920) {
    localStorage.setItem("screen", "large-laptop");
    setScreen("large-laptop");
  } else if (width >= 1921 && width <= 2560) {
    localStorage.setItem("screen", "standard-desktop");
    setScreen("standard-desktop");
  } else if (width >= 2561 && width <= 3840) {
    localStorage.setItem("screen", "large-desktop");
    setScreen("large-desktop");
  } else if (width >= 3841 && width <= 5120) {
    localStorage.setItem("screen", "ultra-wide");
    setScreen("ultra-wide");
  } else if (width >= 5121) {
    localStorage.setItem("screen", "5k-monitor");
    setScreen("5k-monitor");
  }
};

  */

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 320 && width <= 360) {
        localStorage.setItem("screen", "small-phone");
        setScreen("small-phone");
      } else if (width >= 361 && width <= 414) {
        localStorage.setItem("screen", "medium-phone");
        setScreen("medium-phone");
      } else if (width >= 415 && width <= 480) {
        localStorage.setItem("screen", "large-phone");
        setScreen("large-phone");
      } else if (width >= 481 && width <= 768) {
        localStorage.setItem("screen", "small-tablet");
        setScreen("small-tablet");
      } else if (width >= 769 && width <= 1024) {
        localStorage.setItem("screen", "large-tablet");
        setScreen("large-tablet");
      } else if (width >= 1025 && width <= 1280) {
        localStorage.setItem("screen", "small-laptop");
        setScreen("small-laptop");
      } else if (width >= 1281 && width <= 1440) {
        localStorage.setItem("screen", "medium-laptop");
        setScreen("medium-laptop");
      } else if (width >= 1441 && width <= 1920) {
        localStorage.setItem("screen", "large-laptop");
        setScreen("large-laptop");
      } else if (width >= 1921 && width <= 2560) {
        localStorage.setItem("screen", "standard-desktop");
        setScreen("standard-desktop");
      } else if (width >= 2561 && width <= 3840) {
        localStorage.setItem("screen", "large-desktop");
        setScreen("large-desktop");
      } else if (width >= 3841 && width <= 5120) {
        localStorage.setItem("screen", "ultra-wide");
        setScreen("ultra-wide");
      } else if (width >= 5121) {
        localStorage.setItem("screen", "5k-monitor");
        setScreen("5k-monitor");
      }
    };
    // const handleResize = () => {
    //   const width = window.innerWidth;
    //   if (width >= 350 && width <= 640) {
    //     localStorage.setItem("screen", "mobile");
    //     setScreen("mobile");
    //   } else if (width > 640 && width <= 1024) {
    //     localStorage.setItem("screen", "tablet");
    //     setScreen("tablet");
    //   } else if (width > 1024 && width <= 1280) {
    //     localStorage.setItem("screen", "laptop");
    //     setScreen("laptop");
    //   } else if (width > 1280) {
    //     localStorage.setItem("screen", "desktop");
    //     setScreen("desktop");
    //   }
    // };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slides = [
    <Home />,
    <Menu />,
    <Why />,
    <Regions />,
    <Technologies
      keys={["ai/ml", "programming languages", "cloud technologies"]}
    />,
    <Certifications />,
    <Personality />,
    <SkillCheck />,
    <Placements />,
    <Reporting />,
    <Breakdown />,
    <About />,
    // <ThankYou />,
  ];
  
  return <BigScreenView slides={slides} />;
}

const BigScreenView = ({ slides }) => {
  const [isView, setIsView] = useState("scroll");
  const [isFullscreen, setIsFullscreen] = useState(false);
  return (
    <div
      style={{ fontFamily: main_heading_fontstyle }}
      className="flex flex-col items-center justify-start w-full h-full gap-8 text-black transition-all ease-linear mobile:px-0 bg-zinc-0"
    >
      {!isFullscreen && (
        <ViewOptions
          isView={isView}
          setIsView={setIsView}
          setIsFullscreen={setIsFullscreen}
        />
      )}
      {isView === "single" && <SingleSlideView slides={slides} />}
      {isView === "scroll" && <ScrollsSlidesView slides={slides} />}
      {isView === "full" && (
        <FullScreenView
          slides={slides}
          isFullscreen={isFullscreen}
          setIsFullscreen={setIsFullscreen}
          setIsView={setIsView}
        />
      )}
    </div>
  );
};

const ViewOptions = ({ setIsView, isView, setIsFullscreen }) => {
  const { t, i18n } = useTranslation();
  const [currLang, setCurrLang] = useState("en");
  const active = "bg-sky-200";
  const buttonstyles = "px-1 py-1 rounded-lg cursor-pointer";
  const transButton = "cursor-pointer rounded-md py-1 px-2";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrLang(lng);
    localStorage.setItem("lang", lng);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      setCurrLang(lang);
    }
  }, [setCurrLang]);

  return (
    <div
      className={`
    flex justify-between items-center gap-8 w-full py-4
    ${slide_widths}
    `}
    >
      <div className={`${heading_font_size.subcontent} medium-phone:hidden large-phone:hidden small-tablet:hidden flex items-center justify-center gap-2`}>
        <span>Translation: </span>
        <span
          className={`${transButton} ${
            currLang === "en" && "bg-sky-200 text-black font-semibold"
          }`}
          onClick={() => changeLanguage("en")}
        >
          English
        </span>{" "}
        |
        <span
          className={`${transButton} ${
            currLang === "te" && "bg-sky-200 text-black font-semibold"
          }`}
          onClick={() => changeLanguage("te")}
        >
          Telugu
        </span>{" "}
        |
        <span
          className={`${transButton} ${
            currLang === "hi" && "bg-sky-200 text-black font-semibold"
          }`}
          onClick={() => changeLanguage("hi")}
        >
          Hindi
        </span>
      </div>
      <div  className={`${heading_font_size.subcontent} medium-phone:hidden large-phone:hidden small-tablet:hidden flex items-center justify-end gap-2`}>
        <span className="font-light text-black">
          <FontAwesomeIcon icon={faEye} /> View:{" "}
        </span>
        <span
          onClick={() => setIsView("scroll")}
          className={`${
            isView === "scroll" && active
          } ${buttonstyles} flex justify-between items-center ${icon_sizes.small}`}
        >
          {ScrollIcon}
        </span>
        <span
          onClick={() => setIsView("single")}
          className={`${
            isView === "single" && active
          } ${buttonstyles} flex justify-between items-center ${icon_sizes.small}`}
        >
          {SlideshowIcon}
        </span>
        <span
          onClick={() => {
            setIsView("full");
            setIsFullscreen(true);
          }}
          className={`${
            isView === "full" && active
          } ${buttonstyles} flex justify-between items-center ${icon_sizes.small}`}
        >
          {FullscreenIcon}
        </span>
      </div>
    </div>
  );
};

export default App;

const slides_temp = {
  home: ({ ...props }) => <Home {...props} />,
  why: ({ ...props }) => <Why {...props} />,
  regions: ({ ...props }) => <Regions {...props} />,
  technologies: ({ ...props }) => (
    <Technologies
      {...props}
      keys={["ai/ml", "programming languages", "cloud technologies"]}
    />
  ),
  certifications: ({ ...props }) => <Certifications {...props} />,
  personality: ({ ...props }) => <Personality {...props} />,
  skillcheck: ({ ...props }) => <SkillCheck {...props} />,
  placements: ({ ...props }) => <Placements {...props} />,
  reporting: ({ ...props }) => <Reporting {...props} />,
  breakdown: ({ ...props }) => <Breakdown {...props} />,
  about: ({ ...props }) => <About {...props} />,
  // thankyou: ({ ...props }) => <ThankYou {...props} />,
};

const FullScreenView = ({
  slides,
  isFullscreen,
  setIsFullscreen,
  setIsView,
}) => {
  const slide_names = Object.keys(slides_temp);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setCurrentSlide((prevSlide) =>
          prevSlide === slide_names.length - 1 ? 0 : prevSlide + 1
        );
      } else if (event.key === "ArrowLeft") {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? slide_names.length - 1 : prevSlide - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {slides_temp[slide_names[currentSlide]]({
        isFullscreen,
        setIsFullscreen,
        setIsView,
      })}
      <span
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 0 ? slide_names.length - 1 : prev - 1
          )
        }
        className="absolute top-[50%] left-2 cursor-pointer"
      >
        <FontAwesomeIcon className={icon_sizes.small} icon={faArrowLeft} />
      </span>
      <span
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === slide_names.length - 1 ? 0 : prev + 1
          )
        }
        className="absolute top-[50%] right-2 cursor-pointer"
      >
        <FontAwesomeIcon className={icon_sizes.small} icon={faArrowRight} />
      </span>
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
