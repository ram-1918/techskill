import { useEffect, useRef, useState } from "react";
import BaseHeader from "../components/BaseHeader";
import { colors } from "../Base";
import { main_headings } from "../components/data";
import BaseSlide from "../components/BaseSlide";
import BaseContentDiv from "../components/BaseContentDiv";
import { useTranslation } from "react-i18next";
import { approvedIcon } from "../components/icons";


const Breakdown = ({...props}) => {
  const { t } = useTranslation();
  const listitem = (text, percent) => <li className="capitalize">{t(text)}: {percent}</li>;
  return (
      <BaseSlide id="breakdown" {...props}>
        <BaseHeader text={main_headings.slide9.text} />
        <BaseContentDiv text="skill check score breakdown & calculation">
              <div className="flex items-start justify-between w-full gap-6 mobile:flex-col mobile:gap-2 mobile:overflow-x-scroll mobile:overflow-y-scroll">
                <div className="w-[55%] mobile:w-full h-full mobile:h-fit">
                    <BreakdownDiv />
                </div>
                <div className="w-[55%] mobile:w-full h-96 mobile:h-fit flex flex-col justify-start items-start gap-2">
                  <div className="p-2 text-sm font-light">
                    <span className="font-semibold">{t("A typical student's \"skill check\" score for the below attributes:")}</span>
                    {listitem("academics", "83%")}
                    {listitem("aptitude tests", "78%")}
                    {listitem("assessments", "82.5%")}
                    {listitem("certifications", "60%")}
                    {listitem("personality development", "92%")}
                    <span className="flex items-center justify-start py-1 space-x-2 text-lg font-medium text-green-800 capitalize"> {t("skill check score")}: {approvedIcon}8.1 / 10</span>
                  </div>
                  <ProgressBarDiv />
                </div>
              </div>
        </BaseContentDiv>
      </BaseSlide>
  );
}

const ProgressBarDiv = () => {
  const [divWidth, setDivWidth] = useState(0);
  const progressRef = useRef(null);
  useEffect(() => {
    const handle_resize = () => {
      if(progressRef.current) {
        setDivWidth(progressRef.current.clientWidth);
      }
    };
    handle_resize();
    window.addEventListener('resize', handle_resize);
    return () => {
      window.removeEventListener('resize', handle_resize);
    }
  }, [progressRef]);
  const scores = [83, 78, 82, 60, 92];
  const weightages = [50, 10, 20, 10, 10];
  const max_score = scores.length * 100;
  // const relative_percents = scores.map((sc, idx) => sc);
  const relative_percents = scores.map((sc, idx) => (sc * weightages[idx]) / 100);
  const total_score = scores.reduce((s, sc) => sc + s);
  const text_styles = "text-[0.9rem] font-light capitalize";
  const line_styles = "h-full border border-spacing-0.5 border-black border-dotted";
  const { t } = useTranslation();
  return (
    <div>
        <div style={{width:total_score}} className="relative flex items-center justify-between gap-10 pl-10">
          <div style={{width:`${relative_percents[0]}%`}} className={`${text_styles} text-right`}>{t("academics")}</div>
          <div style={{width:`${relative_percents[2]}%`}} className={`${text_styles} text-left`}>{t("assessments")}</div>
          <div style={{width:`${relative_percents[1]}%`}} className={`${text_styles} text-center`}>{t("aptitude")}</div>
        </div>
        <div style={{width:total_score}} className="relative flex items-start justify-between h-10 gap-10 pl-40">
          <div className={line_styles}></div>
          <div className={line_styles}></div>
          <div className={line_styles}></div>
        </div>
        <ProgressBar progressRef={progressRef} max_score={max_score} relative_percents={relative_percents} total_score={total_score} />
        <div style={{width:total_score}} className="relative flex items-start justify-around h-10 pl-48 gap-x-8">
          <div className={line_styles}></div>
          <div className={line_styles}></div>
        </div>
        <div style={{width:total_score}} className="relative flex items-start justify-start pl-48 space-x-0 gap-x-28">
          <div style={{width:relative_percents[4]}} className={`${text_styles} text-center`}>{t("personality development")}</div>
          <div style={{width:relative_percents[3]}} className={`${text_styles} text-left`}>{t("certifications")}</div>
        </div>
    </div>
  )
}

const ProgressBar = ({progressRef, max_score, relative_percents, total_score}) => {
  const skillcheck_score = rounded_num(relative_percents.reduce((sc, prev) => sc + prev))/10;
  return (
    <div ref={progressRef} style={{borderColor:colors.sub, width:max_score}} className="flex items-center justify-start h-8 overflow-hidden bg-gray-100 border-2 rounded">
      <BachelorsBar  score={relative_percents[0]} total_score={total_score} bg_color="#526D82" />
      <PersonalityBar score={relative_percents[4]} total_score={total_score} bg_color="#9DB2BF" />
      <AssessmentsBar  score={relative_percents[2]} total_score={total_score}  bg_color="#CDE8E5" />
      <CertificationsBar  score={relative_percents[3]} total_score={total_score} bg_color="#93BFCF" />
      <ApptitudeBar  score={relative_percents[1]} total_score={total_score} bg_color="#BDCDD6" />
      <span className="pl-4 font-bold text-green-800">{skillcheck_score}</span>/10
    </div>
  )
}

const bar_styles = "h-full bg-gray-200 border-r-2 border-white text-center font-semibold";

const rounded_num = (val) => {
  return Math.round(val)
}

const BachelorsBar = ({score=10, bg_color, total_score}) => {
  return (
      <div style={{backgroundColor: bg_color, width:`${score}%`}} className={bar_styles}></div>
  )
};

const CertificationsBar = ({score=10, bg_color, total_score}) => {
  return (
      <div style={{backgroundColor: bg_color, width:`${score}%`}} className={bar_styles}></div>
  )
}
const AssessmentsBar = ({score=10, bg_color, total_score}) => {
  return (
      <div style={{backgroundColor: bg_color, width:`${score}%`}} className={bar_styles}> </div>
  )
}
const PersonalityBar = ({score=10, bg_color, total_score}) => {
  return (
      <div style={{backgroundColor: bg_color, width:`${score}%`}} className={bar_styles}></div>
  )
}
const ApptitudeBar = ({score=10, bg_color, total_score}) => {
  return (
      <div style={{backgroundColor: bg_color, width:`${score}%`}} className={`${bar_styles} border-r-4 border-r-green-800`}> </div>
  )
}

const BreakdownDiv = () => {
  const { t } = useTranslation();
  const listitem = (text, percent) => <li className="capitalize">{t(text)}: {percent}</li>;
  return (
      <div className="relative mobile:[26rem] mobile:h-[26rem] w-[26rem] h-[23rem] flex justify-center items-center rounded-lg bg-bg10 bg-contain bg-no-repeat bg-top">
        <div className="absolute top-[37%] left-[28%] w-48 h-48 text-[0.7rem] font-sans px-2 text-black">
          <span className="font-bold text-md">{t("scores weightage")}</span>
          <ul>
            {listitem("academics", "50%")}
            {listitem("aptitude tests", "10%")}
            {listitem("assessments", "20%")}
            {listitem("certifications", "10%")}
            {listitem("personality development", "10%")}
          </ul>
        </div>
        </div>
  )
}

/*

<div>
      <span>A typical student's scroring attributes</span>
      <li>Bachelor's degree grade: 8.3</li>
      <li>Aptitude Test: 78/100</li>
      <li>Assessments Average: 82.5/100</li>
      <li>Certifications: 6/10</li>
      <li>Personality Developement: 92/100</li>
  </div>
*/

// const ProgressArc = ({ progress }) => {
//     // Ensure progress is between 0 and 100
//     const clampedProgress = Math.max(0, Math.min(100, progress));
//     // Convert progress to degrees (0 to 360)
//     const degrees = 360 - (clampedProgress / 100) * 360;
  
//     return (
//       <div className="flex items-center justify-center">
//         <div className="relative w-40 h-40 overflow-hidden bg-green-500 rounded-full">
//           <div
//             className="absolute w-full h-full origin-center transform rounded-full clip-rect"
//             style={{ transform: `rotate(${degrees}deg)` }}
//           >
//             <div
//               className="absolute w-full h-full origin-center transform bg-gray-200 rounded-full clip-rect"
//               style={{ transform: `rotate(${degrees}deg)` }}
//             ></div>
//           </div>
//           <div className="absolute w-full h-full bg-gray-200 rounded-full clip-rect-left"></div>
//           <div className="absolute top-2.5 left-2.5 w-[calc(100%-1.25rem)] h-[calc(100%-1.25rem)] rounded-full bg-white flex justify-center items-center text-2xl font-bold text-green-500">
//             {clampedProgress}%
//           </div>
//         </div>
//       </div>
//     );
//   };
  

// const CircleCanvas = ({ radius, centerX, centerY }) => {
//     const canvasRef = useRef(null);
  
//     useEffect(() => {
//       const canvas = canvasRef.current;
//       const context = canvas.getContext('2d');
  
//       // Clear the canvas before drawing
//       context.clearRect(0, 0, canvas.width, canvas.height);
  
//       // Draw the circle
//       context.beginPath();
//       context.arc(centerX, centerY, radius, 0, 2 * Math.PI/1.5);
//       context.fillStyle = 'blue';
//       context.fill();
//       context.stroke();
  
//     }, [radius, centerX, centerY]); // Re-run the effect if radius, centerX, or centerY changes
  
//     return <canvas ref={canvasRef} width={500} height={500} />;
//   };

export default Breakdown;