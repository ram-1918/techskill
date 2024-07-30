import { useEffect, useRef, useState } from "react";
import BaseHeader from "../components/BaseHeader";
import { colors, heading_font_size, icon_sizes, image_size, image_size_essential } from "../Base";
import { main_headings } from "../components/data";
import BaseSlide from "../components/BaseSlide";
import BaseContentDiv from "../components/BaseContentDiv";
import { useTranslation } from "react-i18next";
import { approvedIcon } from "../components/icons";
import progressbar from "../assets/icons/progressbardiv.png"


const Breakdown = ({...props}) => {
  const { t } = useTranslation();
  const listitem = (text, percent) => <li className={`capitalize`}>{t(text)}: {percent}</li>;
  return (
      <BaseSlide id="breakdown" {...props}>
        <BaseHeader text={main_headings.slide9.text} />
        <BaseContentDiv text="skill check score breakdown & calculation">
              <div className="flex items-start justify-between w-full mobile:flex-col mobile:gap-2 mobile:overflow-x-scroll mobile:overflow-y-scroll">
                <div className="w-[55%] mobile:w-full h-full mobile:h-fit">
                    <BreakdownDiv />
                </div>
                <div className="w-[55%] mobile:w-full mobile:h-fit flex flex-col justify-start items-start gap-2">
                  <div className={` ${heading_font_size.subcontent} p-2 font-light gap-10`}>
                    <span className="font-semibold">{t("A typical student's \"skill check\" score for the below attributes:")}</span>
                    {listitem("academics", "83%")}
                    {listitem("aptitude tests", "78%")}
                    {listitem("assessments", "82.5%")}
                    {listitem("certifications", "60%")}
                    {listitem("personality development", "92%")}
                    <span className={`${heading_font_size.content} flex items-center justify-start space-x-2 font-medium text-green-800 capitalize`}> {t("skill check score")}: {approvedIcon}8.1 / 10</span>
                  </div>
                  {/* <ProgressBarDiv /> */}
                  <img src={progressbar} alt="Progress bar" />
                </div>
              </div>
        </BaseContentDiv>
      </BaseSlide>
  );
}


const BreakdownDiv = () => {
  const { t } = useTranslation();
  const listitem = (text, percent) => <li className="capitalize">{t(text)}: {percent}</li>;
  return (
      <div className={`relative ${image_size} flex justify-center items-center rounded-lg bg-bg10 bg-contain bg-no-repeat bg-top`}>
        <div className={`${heading_font_size.subcontent2} absolute top-[34%] left-[29%] font-sans px-2 text-black`}>
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


const screen_specific = {
  '5k-monitor': {
      width: 'w-[70%]',
      height: 'h-40',
      barheight: 'h-20',
      gapup: 'gap-[25rem]',
      paddingup: 'pl-[42rem]',
      paddingtextup: 'pl-[35rem]',
      gapdown: 'gap-[27rem]',
      paddingdown: 'pl-[57rem]',
      paddingtextdown: 'pl-[48rem]'
  },
  'ultra-wide': {
    width: 'w-[70%]',
    height: 'h-36',
    barheight: 'h-16',
    gapup: 'gap-[20rem]',
    paddingup: 'pl-[30rem]',
    paddingtextup: 'pl-[25rem]',
    gapdown: 'gap-[22rem]',
    paddingdown: 'pl-[40rem]',
    paddingtextdown: 'pl-[35rem]'
},
  'large-desktop': {
    width: 'w-[70%]',
    height: 'h-28',
    barheight: 'h-12',
    gapup: 'gap-[12rem]',
    paddingup: 'pl-[20rem]',
    paddingtextup: 'pl-[12rem]',
    gapdown: 'gap-[14rem]',
    paddingdown: 'pl-[28rem]',
    paddingtextdown: 'pl-[20rem]'
},
  'standard-desktop': {
    width: 'w-[70%]',
    height: 'h-24',
    barheight: 'h-10',
    gapup: 'gap-[10rem]',
    paddingup: 'pl-[14rem]',
    paddingtextup: 'pl-[5rem]',
    gapdown: 'gap-[12rem]',
    paddingdown: 'pl-[20rem]',
    paddingtextdown: 'pl-[18rem]'
},
  'large-laptop': {
    width: 'w-[70%]',
    height: 'h-20',
    barheight: 'h-8',
    gapup: 'gap-[9rem]',
    paddingup: 'pl-[7.8rem]',
    paddingtextup: 'pl-[2rem]',
    gapdown: 'gap-[9rem]',
    paddingdown: 'pl-[16rem]',
    paddingtextdown: 'pl-[13rem]'
},
  'medium-laptop': {
    width: 'w-[70%]',
    height: 'h-8',
    barheight: 'h-6',
    gapup: 'gap-[2rem]',
    paddingup: 'pl-[2rem]',
    paddingtextup: 'pl-[1.8rem]',
    gapdown: 'gap-[1.8rem]',
    paddingdown: 'pl-[10rem]',
    paddingtextdown: 'pl-[13rem]'
},
  'small-laptop': {
    width: 'w-[70%]',
    height: 'h-20',
    barheight: 'h-8',
    gapup: 'gap-[10rem]',
    paddingup: 'pl-[7.5rem]',
    paddingtextup: 'pl-[2.4rem]',
    gapdown: 'gap-[9rem]',
    paddingdown: 'pl-[16rem]',
    paddingtextdown: 'pl-[13rem]'
},
  'large-tablet': {
    width: 'w-[70%]',
    height: 'h-20',
    barheight: 'h-8',
    gapup: 'gap-[10rem]',
    paddingup: 'pl-[7.5rem]',
    paddingtextup: 'pl-[2.4rem]',
    gapdown: 'gap-[9rem]',
    paddingdown: 'pl-[16rem]',
    paddingtextdown: 'pl-[13rem]'
},
  'small-tablet': {
      width: 'w-[3rem]',
      height: 'h-[4rem]',
      innerwidth: 'w-[2.2rem]',
      padding: 'py-[0.2rem]'
  },
  'large-phone': {
      width: 'w-[2rem]',
      height: 'h-[3rem]',
      innerwidth: 'w-[2rem]',
      padding: 'py-[0.1rem]'
  },
  'small-phone': {
      width: 'w-[1rem]',
      height: 'h-[2rem]',
      innerwidth: 'w-[1.2rem]',
      padding: 'py-[0.3rem]'
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

  const textStyles = `${heading_font_size.subcontent} font-light capitalize`;
  const lineStyles = "h-full border border-spacing-0.5 border-black border-dotted";
  const { t } = useTranslation();
  const screen = localStorage.getItem('screen') || 'medium-laptop';

  return (
    <div className="w-full ">
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
    </div>
  );
};

const ProgressBar = ({ progressRef, maxScore, relativePercents, totalScore }) => {
  const skillCheckScore = Math.round(relativePercents.reduce((sc, prev) => sc + prev) / 10);
  const screen = localStorage.getItem('screen') || 'medium-laptop';

  return (
    <div ref={progressRef} style={{ borderColor: '#C0C0C0', width: "80%" }} className={`flex items-center justify-start ${screen_specific[screen].barheight} overflow-hidden bg-gray-100 border-2 border-gray-200 rounded`}>
      <BachelorsBar score={relativePercents[0]} totalScore={totalScore} bgColor="#526D82" />
      <PersonalityBar score={relativePercents[4]} totalScore={totalScore} bgColor="#9DB2BF" />
      <AssessmentsBar score={relativePercents[2]} totalScore={totalScore} bgColor="#CDE8E5" />
      <CertificationsBar score={relativePercents[3]} totalScore={totalScore} bgColor="#93BFCF" />
      <ApptitudeBar score={relativePercents[1]} totalScore={totalScore} bgColor="#BDCDD6" />
      <span className={`${heading_font_size.subcontent2} pl-4 font-bold text-green-800`}>{skillCheckScore}/10</span>
    </div>
  );
};

const barStyles = "h-full bg-gray-200 border-r-2 border-white text-center font-semibold";

const BachelorsBar = ({ score, bgColor }) => (
  <div style={{ backgroundColor: bgColor, width: `${score}%` }} className={barStyles}></div>
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