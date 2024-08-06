import { useEffect, useRef, useState } from "react";
import { colors, heading_font_size, icon_sizes, image_size, image_size_essential } from "../Base";
import { useTranslation } from "react-i18next";


const screen_specific = {
    '5k-monitor': {
        width: 'w-[70%]',
        height: 'h-[15rem]',
        barheight: 'h-24',
    },
    'ultra-wide': {
      width: 'w-[70%]',
      barheight: 'h-20',
  },
    'large-desktop': {
      width: 'w-[70%]',
      barheight: 'h-16',
  },
    'standard-desktop': {
      width: 'w-[70%]',
      barheight: 'h-10',
  },
    'large-laptop': {
      width: 'w-[70%]',
      barheight: 'h-8',
  },
    'medium-laptop': {
      width: 'w-[70%]',
      barheight: 'h-6',
  },
    'small-laptop': {
      width: 'w-[70%]',
      barheight: 'h-8'
  },
    'large-tablet': {
      width: 'w-[70%]',
      barheight: 'h-8'
  },
    'small-tablet': {
        width: 'w-[3rem]',
        barheight: 'h-8'
    },
    'large-phone': {
        width: 'w-[3rem]',
        barheight: 'h-8'
    },
    'medium-phone': {
      width: 'w-[3rem]',
      barheight: 'h-8'
  },
    'small-phone': {
        width: 'w-[3rem]',
        barheight: 'h-8'
    },
  }
  
const ProgressBarDiv = () => {
    const [divWidth, setDivWidth] = useState(0);
    const progressRef = useRef(null);
    
    useEffect(() => {
      const handleResize = () => {
        if (progressRef.current) {
          setDivWidth(progressRef.current.clientWidth);
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [progressRef]);
    
    const scores = [83, 78, 82, 60, 92];
    const weightages = [50, 10, 20, 10, 10];
    const maxScore = scores.length * 100;
    const relativePercents = scores.map((sc, idx) => (sc * weightages[idx]) / 100);
    const totalScore = scores.reduce((s, sc) => sc + s, 0);
    const skillCheckScore = Math.round(relativePercents.reduce((sc, prev) => sc + prev) / 10);
  
    const textStyles = `${heading_font_size.subcontent} font-light capitalize`;
    const lineStyles = "h-full border border-spacing-0.5 border-black border-dotted";
    const { t } = useTranslation();
    const screen = localStorage.getItem('screen') || 'medium-laptop';
  
    return (
      <div className="w-full py-10 medium-phone:hidden large-phone:hidden">
        <Text val1={true} val3={true} val5={true} relativePercents={relativePercents} />
        <Bars relativePercents={relativePercents} val1={true} val3={true} val5={true} />
        <ProgressBar progressRef={progressRef} maxScore={maxScore} relativePercents={relativePercents} totalScore={totalScore} />
        <Bars relativePercents={relativePercents} val2={true} val4={true} />
        <Text val2={true} val4={true} relativePercents={relativePercents} />
      </div>
    );
  };

  const Text = ({width="", val1='', val2='', val3='', val4='', val5='', relativePercents}) => {
    return (
        <div  style={{ borderColor: '#C0C0C0', width: "85%", height:"" }} className={`flex items-center justify-start`}>
            <BarText text={val1 && "academics"} width={relativePercents[0]}/>
            <BarText text={val2 && "certifications"} width={relativePercents[4]} />
            <BarText text={val3 && "assessments"} width={relativePercents[2]} />
            <BarText text={val4 && "personality development"} width={relativePercents[3]} />
            <BarText text={val5 && "aptitude"} width={relativePercents[1]} />
        </div>
    )
  }

  const Bars = ({relativePercents, val1=false, val2=false, val3=false, val4=false, val5=false}) => {
    return (
        <div style={{ borderColor: '#C0C0C0', width: "85%" }} className={`flex items-center justify-start `}>
            <BarLine width={relativePercents[0]} isLine={val1} />
            <BarLine width={relativePercents[4]} isLine={val2} />
            <BarLine width={relativePercents[2]} isLine={val3} />
            <BarLine width={relativePercents[3]} isLine={val4} />
            <BarLine width={relativePercents[1]} isLine={val5} />
        </div>
    )
  }

  const BarText = ({width, text}) => {
    const {t} = useTranslation();
    return (
        <div style={{ width: `${width}%`, color:colors.sub }} className={`flex items-center justify-center h-full ${heading_font_size.subcontent2} font-semibold`}>
            {t(text)}
        </div>
    )
  }

  const BarLine = ({width, isLine=true}) => {
    const screen = localStorage.getItem('screen') || 'medium-laptop';

    return (
        <div style={{ width: `${width}%`, height: "2.5rem"}} className="flex items-center justify-center h-full ">
            {isLine &&  <div style={{borderColor: colors.content}} className="w-1 h-full border-2 border-dashed"></div>}
        </div>
    )
  }
  
  const ProgressBar = ({ progressRef, maxScore, relativePercents, totalScore }) => {
    const skillCheckScore = Math.round(relativePercents.reduce((sc, prev) => sc + prev) / 10);
    const screen = localStorage.getItem('screen') || 'medium-laptop';
  
    return (
      <div ref={progressRef} style={{ borderColor: colors.content, width: "85%" }} className={`flex items-center justify-start ${screen_specific[screen].barheight} overflow-hidden bg-gray-100 border-2 border-gray-200 rounded`}>
        <BachelorsBar score={relativePercents[0]} totalScore={totalScore} bgColor="#526D82" />
        <PersonalityBar score={relativePercents[4]} totalScore={totalScore} bgColor="#9DB2BF" />
        <AssessmentsBar score={relativePercents[2]} totalScore={totalScore} bgColor="#CDE8E5" />
        <CertificationsBar score={relativePercents[3]} totalScore={totalScore} bgColor="#93BFCF" />
        <ApptitudeBar score={relativePercents[1]} totalScore={totalScore} bgColor="#BDCDD6" />
        <span className={`${heading_font_size.subcontent2} pl-4 font-medium text-green-800`}>{skillCheckScore}/10</span>
      </div>
    );
  };
  
  const barStyles = "h-full bg-gray-200 border-r-2 border-white text-center font-semibold";
  
  const BachelorsBar = ({ score, bgColor, text, height }) => (
    <div style={{ backgroundColor: bgColor, width: `${score}%`, height: height }} className={barStyles}>{text}</div>
  );
  
  const CertificationsBar = ({ score, bgColor }) => (
    <div style={{ backgroundColor: bgColor, width: `${score}%` }} className={barStyles}></div>
  );
  
  const AssessmentsBar = ({ score, bgColor }) => (
    <div style={{ backgroundColor: bgColor, width: `${score}%` }} className={barStyles}></div>
  );
  
  const PersonalityBar = ({ score, bgColor }) => (
    <div style={{ backgroundColor: bgColor, width: `${score}%` }} className={barStyles}></div>
  );
  
  const ApptitudeBar = ({ score, bgColor }) => (
    <div style={{ backgroundColor: bgColor, width: `${score}%` }} className={`${barStyles} border-r-4 border-r-green-800`}></div>
  );

  export default ProgressBarDiv;
  

  /*
      <div style={{ width: totalScore }} className={`relative flex items-center justify-between ${screen_specific[screen].gapup} ${screen_specific[screen].paddingtextup}`}>
          <div style={{ width: `${relativePercents[0]}%` }} className={`${textStyles} text-right`}>{t("academics")}</div>
          <div style={{ width: `${relativePercents[2]}%` }} className={`${textStyles} text-left`}>{t("assessments")}</div>
          <div style={{ width: `${relativePercents[1]}%` }} className={`${textStyles} text-center`}>{t("aptitude")}</div>
        </div>
        <div style={{ width: totalScore }} className={`relative flex items-start justify-between  ${screen_specific[screen].height} ${screen_specific[screen].gapup} ${screen_specific[screen].paddingup}`}>
          <div className={lineStyles}></div>
          <div className={lineStyles}></div>
          <div className={lineStyles}></div>
        </div>
        <ProgressBar progressRef={progressRef} maxScore={maxScore} relativePercents={relativePercents} totalScore={totalScore} />
        <div style={{ width: totalScore }} className={`relative flex items-start justify-around ${screen_specific[screen].height} ${screen_specific[screen].gapdown} ${screen_specific[screen].paddingdown}`}>
          <div className={lineStyles}></div>
          <div className={lineStyles}></div>
        </div>
        <div style={{ width: totalScore }} className={`relative flex items-start justify-start ${screen_specific[screen].gapdown} ${screen_specific[screen].paddingtextdown}`}>
          <div style={{ width: relativePercents[4] }} className={`${textStyles} text-center`}>{t("personality development")}</div>
          <div style={{ width: relativePercents[3] }} className={`${textStyles} text-left`}>{t("certifications")}</div>
        </div>
  */