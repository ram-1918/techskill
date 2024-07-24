import BaseHeader from "../components/BaseHeader";
import { LokeshImage } from "../components/BaseImages";
import PieChart from "../components/PieChart";

const Breakdown = () => {
  return (
    <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
        <BaseHeader text="Comprehensive & robust personality development program" />
        <div className="w-full p-2 flex flex-col justify-center items-center gap-5">
            <span className="font-light text-xl text-sky-700 underline underline-offset-2">Skill Check Score Breakdown</span>
            <div className="w-full flex justify-between items-center gap-0">
                <div className="w-[45%] h-96 flex flex-col justify-center items-center gap-4 ">
                    <div>
                        <span>A typical student's scroring attributes</span>
                        <li>Bachelor's degree grade: 8.3</li>
                        <li>Aptitude Test: 78/100</li>
                        <li>Assessments Average: 82.5/100</li>
                        <li>Certifications: 6/10</li>
                        <li>Personality Developement: 92/100</li>
                    </div>
                    <div className="text-sm font-light bg-gray-200 p-2 rounded-lg">
                        Scores Breakdown
                        <li>Bachelor's degree grade: 50%</li>
                        <li>Aptitude Test: 10%</li>
                        <li>Assessments Average: 20%</li>
                        <li>Certifications: 10%</li>
                        <li>Personality Developement: 10%</li>
                    </div>
                </div>
                <div className="w-fit h-full overflow-hidden ">
                    <div className="w-fit relative h-96 flex justify-center items-center">
                        <span className="absolute top-[40%] left-[36%] z-0"><LokeshImage size="w-20 h-20" /></span>
                        <PieChart />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

// const Chart = () => {
//     const centerX = 100;
//     const centerY = 100;
//     const radius = 90;
//     const data = [41.5, 7.8, 16.5, 6, 9.2];
//     const totalData = data.reduce((sum, value) => sum + value, 0);
    
//     // Calculate the angles for each data point
//     const angles = data.map((value, index) => {
//       const angle = (value / totalData) * 360;
//       const radians = (angle * Math.PI) / 180;
//       return radians;
//     });
  
//     // Calculate the positions of the points
//     const points = angles.map((radians, index) => {
//       const x = centerX + radius * Math.cos(radians);
//       const y = centerY + radius * Math.sin(radians);
//       return { x, y, label: data[index] };
//     });
  
//     return (
//       <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//         {/* Circle */}
//         <circle cx={centerX} cy={centerY} r={radius} stroke="black" strokeWidth="2" fill="none" />
//         {/* Lines from center to points */}
//         {points.map((point, index) => (
//           <line key={index} x1={centerX} y1={centerY} x2={point.x} y2={point.y} stroke="black" strokeWidth="1" />
//         ))}
//         {/* Points and labels */}
//         {points.map((point, index) => (
//           <g key={index}>
//             <circle cx={point.x} cy={point.y} r="3" fill="red" />
//             <text x={point.x + 5} y={point.y - 5} fontSize="10" fill="black">{point.label}</text>
//           </g>
//         ))}
//       </svg>
//     );
// }

// const Chart = () => {
//     const centerX = 100;
//     const centerY = 100;
//     const radius = 90;
//     const data = [41.5, 7.8, 16.5, 6, 9.2];
//     const totalData = data.reduce((sum, value) => sum + value, 0);
  
//     // Generate a color palette for data points
//     const colorPalette = data.map((_, index) => `hsl(${index * 360 / data.length}, 100%, 50%)`);
  
//     // Calculate the angles for each data point
//     const angles = data.map((value, index) => {
//       const angle = (value / totalData) * 360;
//       const radians = (angle * Math.PI) / 180;
//       return radians;
//     });
  
//     // Calculate the starting and ending points for each area segment
//     const areaPoints = angles.map((radians, index) => {
//       const startAngle = angles[index === 0 ? data.length - 1 : index - 1] || 0;
//       const endAngle = radians;
  
//       const startX = centerX + radius * Math.cos(startAngle);
//       const startY = centerY + radius * Math.sin(startAngle);
//       const endX = centerX + radius * Math.cos(endAngle);
//       const endY = centerY + radius * Math.sin(endAngle);
  
//       return { startX, startY, endX, endY, color: colorPalette[index] };
//     });
  
//     return (
//       <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//         {/* Circle */}
//         <circle cx={centerX} cy={centerY} r={radius} stroke="black" strokeWidth="2" fill="none" />
//         {/* Area segments */}
//         {areaPoints.map((point, index) => (
//           <path
//             key={index}
//             d={`M ${centerX},${centerY} L ${point.startX},${point.startY} A ${radius},${radius} 0 0 1 ${point.endX},${point.endY} L ${centerX},${centerY} Z`}
//             fill={point.color}
//           />
//         ))}
//         {/* Points and labels */}
//         {areaPoints.map((point, index) => (
//           <g key={index}>
//             <circle cx={point.x} cy={point.y} r="3" fill="black" />
//             <text x={point.x + 5} y={point.y - 5} fontSize="10" fill="white">{point.label}</text>
//           </g>
//         ))}
//       </svg>
//     );
//   };
  
  

// const PDItems = () => {
//     return (
//         <ul className="w-full flex justify-between items-center gap-4 px-2">
//             { reporting_items.map(item => <ListItem key={item.id} item={item} />) }
//         </ul>
//     )
// };

// const ListItem = ({item:{icon, name, content}}) => {
//     return (
//         <li className="w-72 h-64 flex flex-col justify-center items-center gap-3">
//             <span className="w-24 h-24">{icon}</span>
//             <div className="flex flex-col justify-center items-center">
//                 <span className="text-2xl font-semibold">{content}</span>
//                 <span className="text-md font-light whitespace-pre-wrap">{name}</span>
//             </div>
//         </li>
//     );
// };

export default Breakdown;