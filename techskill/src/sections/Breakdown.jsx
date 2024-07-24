import { useEffect, useRef, useState } from "react";
import BaseHeader from "../components/BaseHeader";
import { LokeshImage } from "../components/BaseImages";
import PieChart from "../components/PieChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Subhead from "../components/Subhead";
import { colors } from "../Base";
import { main_headings } from "../components/data";

const Breakdown = () => {
  return (
    <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-0 py-2 px-4 flex flex-col justify-start items-end">
        <BaseHeader text={main_headings.slide9.text} />
        <div className="w-full p-2 flex flex-col justify-center items-center gap-1">
          <Subhead text="Skill Check Score Breakdown & Calculation" />
            <div className="w-full flex justify-between items-center gap-6">
              <div className="w-[55%] h-full">
                  <BreakdownDiv />
              </div>
              <div className="w-[55%] h-96 flex flex-col justify-start items-start gap-2">
                <div className="text-sm font-light p-2">
                  <span className="font-semibold">A typical student's "skill check" score calculation</span>
                  <li>Bachelor's degree: 83%</li>
                  <li>Aptitude Test: 78%</li>
                  <li>Assessments Average: 82.5%</li>
                  <li>Certifications: 60%</li>
                  <li>Personality Developement: 92%</li>
                </div>
                <ProgressBarDiv />
              </div>
            </div>
        </div>
    </section>
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
  const total_score = scores.reduce((s, sc) => sc + s);
  const max_score = scores.length * 100;
  const relative_percents = scores.map(sc => sc);
  const text_styles = "text-[0.9rem] font-light";
  const line_styles = "h-full border border-slate-700 border-spacing-0.5 border-dotted"
  return (
    <div>
                <div style={{width:total_score}} className="relative flex justify-start items-start">
                  {/* <div style={{width:total_score}} className="absolute bg-red-500 h-1"></div> */}
                  <div style={{width:relative_percents[0]}} className={`${text_styles} text-center`}>GPA</div>
                  <div style={{width:relative_percents[4]}} className={''}></div>
                  <div style={{width:relative_percents[2]}} className={`${text_styles} text-left`}>Assessments</div>
                  <div style={{width:relative_percents[3]}} className={''}></div>
                  <div style={{width:relative_percents[1]}} className={`${text_styles} text-center`}>Aptitude</div>
                </div>
                <div style={{width:total_score}} className="relative h-10 flex justify-around items-start">
                  <div className={line_styles}></div>
                  <div className="w-2 h-full "></div>
                  <div className={line_styles}></div>
                  <div className="w-2 h-full "></div>
                  <div className={line_styles}></div>
                </div>
                <ProgressBar progressRef={progressRef} max_score={max_score} relative_percents={relative_percents} total_score={total_score} />
                <div style={{width:total_score}} className="relative h-10  flex justify-around items-start">
                  <div className="w-2 h-full "></div>
                  <div className={line_styles}></div>
                  <div className="w-2 h-full "></div>
                  <div className={line_styles}></div>
                  <div className="w-2 h-full "></div>
                </div>
                <div style={{width:total_score}} className="relative flex justify-start items-start space-x-0">
                  <div style={{width:relative_percents[0]}} className={''}></div>
                  <div style={{width:relative_percents[4]}} className={`${text_styles} text-center`}>Personality Assessments</div>
                  <div style={{width:relative_percents[2]}} className={'text_styles'}></div>
                  <div style={{width:relative_percents[3]}} className={`${text_styles} text-left`}>Certifications</div>
                  <div style={{width:relative_percents[1]}} className={'text_styles'}></div>
                  {/* <div style={{width:total_score}} className="absolute bottom-0 bg-red-500 h-1"></div> */}
                </div>
    </div>
  )
}

const ProgressBar = ({progressRef, max_score, relative_percents, total_score}) => {
  return (
    <div ref={progressRef} style={{borderColor:colors.sub, width:max_score}} className="h-8 border-2 bg-gray-100 rounded flex justify-start items-center overflow-hidden">
      <BachelorsBar  score={relative_percents[0]} total_score={total_score} bg_color="#526D82" />
      <PersonalityBar score={relative_percents[4]} total_score={total_score} bg_color="#9DB2BF" />
      <AssessmentsBar  score={relative_percents[2]} total_score={total_score}  bg_color="#CDE8E5" />
      <CertificationsBar  score={relative_percents[3]} total_score={total_score} bg_color="#93BFCF" />
      <ApptitudeBar  score={relative_percents[1]} total_score={total_score} bg_color="#BDCDD6" />
      <span className="px-4 font-semibold text-green-500">79%</span>
    </div>
  )
}

const bar_styles = "h-full bg-gray-200 border-r-2 border-white text-center font-semibold";
const rounded_num = (val) => {
  return Math.round(val)
}

const BachelorsBar = ({score=10, bg_color, total_score}) => {
  return (
      <div style={{backgroundColor: bg_color, width:score}} className={bar_styles}>{rounded_num((score/total_score)*100)} %</div>
  )
};

const CertificationsBar = ({score=10, bg_color, total_score}) => {
  return (
      <div style={{backgroundColor: bg_color, width:score}} className={bar_styles}>{rounded_num((score/total_score)*100)} %</div>
  )
}
const AssessmentsBar = ({score=10, bg_color, total_score}) => {
  return (
      <div style={{backgroundColor: bg_color, width:score}} className={bar_styles}>{rounded_num((score/total_score)*100)} % </div>
  )
}
const PersonalityBar = ({score=10, bg_color, total_score}) => {
  return (
      <div style={{backgroundColor: bg_color, width:score}} className={bar_styles}>{rounded_num((score/total_score)*100)} % </div>
  )
}
const ApptitudeBar = ({score=10, bg_color, total_score}) => {
  return (
      <div style={{backgroundColor: bg_color, width:score}} className={`${bar_styles} border-r-4 border-r-green-500`}>{rounded_num((score/total_score)*100)} % </div>
  )
}

const BreakdownDiv = () => {
  return (
      <div className="relative w-[26rem] h-[26rem] flex justify-center items-center rounded-lg bg-bg10 bg-contain bg-no-repeat bg-top">
        <div className="absolute top-[33%] left-[28%] w-48 h-48 text-[0.7rem] font-sans px-2">
          <span className="text-md font-bold">Scores Weightage</span>
          <ul>
            <li>Bachelor's degree: 50%</li>
            <li>Aptitude Test: 10%</li>
            <li>Assessments Average: 20%</li>
            <li>Certifications: 10%</li>
            <li>Personality Developement: 10%</li>
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
//       <div className="flex justify-center items-center">
//         <div className="relative w-40 h-40 rounded-full bg-green-500 overflow-hidden">
//           <div
//             className="absolute w-full h-full rounded-full clip-rect transform origin-center"
//             style={{ transform: `rotate(${degrees}deg)` }}
//           >
//             <div
//               className="absolute w-full h-full rounded-full clip-rect bg-gray-200 transform origin-center"
//               style={{ transform: `rotate(${degrees}deg)` }}
//             ></div>
//           </div>
//           <div className="absolute w-full h-full rounded-full clip-rect-left bg-gray-200"></div>
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