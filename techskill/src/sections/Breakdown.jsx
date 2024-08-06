import BaseHeader from "../components/BaseHeader";
import { colors, heading_font_size, image_size } from "../Base";
import { main_headings } from "../components/data";
import BaseSlide from "../components/BaseSlide";
import BaseContentDiv from "../components/BaseContentDiv";
import { useTranslation } from "react-i18next";
import { approvedIcon } from "../components/icons";
import ProgressBarDiv from "../components/ProgressDiv";


const Breakdown = ({...props}) => {
  const { t } = useTranslation();
  const listitem = (text, percent) => <li className={`capitalize`}>{t(text)}: {percent}</li>;
  return (
      <BaseSlide id="breakdown" {...props}>
        <BaseHeader text={main_headings.slide9.text} />
        <BaseContentDiv text="skill check score breakdown & calculation">
              <div style={{color: colors.subcontent}} className="flex items-start justify-center w-full px-5 space-x-4 small-tablet:flex-col small-tablet:overflow-y-scroll small-phone:flex-col">
                {/* <div className="w-[45%] h-full bg-center bg-no-repeat bg-contain bg-weightage-white"></div> */}
                <div className="w-[45%] flex items-center justify-center h-fit small-tablet:w-full small-phone:w-full">
                  <BreakdownDiv />
                </div>
                <div className="w-[55%] large-phone:w-full flex flex-col items-start justify-start h-full gap-1 px-2">
                  <div className={`w-full ${heading_font_size.subcontent} p-2 font-light gap-4`}>
                      <span className="font-semibold">{t("A typical student's \"skill check\" score for the below attributes:")}</span>
                      {listitem("academics", "83%")}
                      {listitem("aptitude tests", "78%")}
                      {listitem("assessments", "82.5%")}
                      {listitem("certifications", "60%")}
                      {listitem("personality development", "92%")}
                      <span className={`${heading_font_size.content} flex items-center justify-start space-x-2 font-medium text-green-800 capitalize`}> {t("skill check score")}: {approvedIcon}8 / 10</span>
                  </div>
                  <ProgressBarDiv />
                  {/* <img src={progressbar} alt="Progress bar" /> */}
                </div>
              </div>
        </BaseContentDiv>
      </BaseSlide>
  );
}

const positions = `
large-laptop:top-[31%] medium-laptop:top-[28%] small-laptop:top-[28%] large-tablet:top-[25%] large-tablet:left-[28%]
`

const BreakdownDiv = () => {
  const { t } = useTranslation();
  const listitem = (text, percent) => <li className={`${heading_font_size.subcontent2} capitalize`}>{t(text)}: {percent}</li>;
  return (
      <div className={`relative ${image_size} flex justify-center items-center rounded-lg bg-weightage bg-contain bg-no-repeat bg-top`}>
        <div className={`${heading_font_size.subcontent2} ${positions} absolute top-[32%] left-[28.5%] small-tablet:left-[24%] font-sans px-2 text-black`}>
          <span className="font-bold capitalize text-md">{t("scores weightage")}</span>
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