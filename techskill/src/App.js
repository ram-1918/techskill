import About from "./sections/About";
import Breakdown from "./sections/Breakdown";
import Home from "./sections/Home";
import Personality from "./sections/Personality";
import Placements from "./sections/Placements";
import Regions from "./sections/Regions";
import Reporting from "./sections/Reporting";
import SkillCheck from "./sections/SkillCheck";
import Technologies from "./sections/Technologies";

function App() {
  return (
    <div className="px-[15%] py-10 space-y-5">
      <Home />
      <Regions />
      <Technologies keys={['cloud technologies', 'ai/ml', 'programming languages']} />
      <Technologies keys={['devops', 'advanced']} />
      <Personality />
      <SkillCheck />
      <Placements />
      <Reporting />
      <Breakdown />
      <About />
    </div>
  );
}

export default App;
