import BaseHeader from "../components/BaseHeader";
import { CertifiedIcon, CommunicationIcon, InterviewIcon, LocationsIcon, PlacedIcon, RegistedIcon, SoftIcon } from "../components/icons";
import PieChart from "../components/PieChart";

const reporting_items = [
    {
        id: 1,
        name: "Students registered",
        icon: RegistedIcon,
        content: "2,423,422"
    },
    {
        id: 2,
        name: "Skill check centers",
        icon: LocationsIcon,
        content: "456"
    },
    {
        id: 3,
        name: "Certified youth",
        icon: CertifiedIcon,
        content: "2,302,251"
    },
    {
        id: 4,
        name: "Placed youth",
        icon: PlacedIcon,
        content: "2,000,375"
    }
]

const Breakdown = () => {
  return (
    <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
        <BaseHeader text="Comprehensive & robust personality development program" />
        <div className="w-full p-2 flex flex-col justify-center items-center gap-5">
            <span className="font-light text-xl text-sky-700 underline underline-offset-2">Skill Check Score Breakdown</span>
            <div className="w-full flex justify-start items-center">
                <div className="w-[50%] flex flex-col justify-start items-center gap-4 bg-red-300">
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
                        <li>Assessments Average: 15%</li>
                        <li>Certifications: 10%</li>
                        <li>Personality Developement: 15%</li>
                    </div>
                </div>
                <div className="w-[60%] h-full overflow-hidden bg-green-100">
                    <div className="w-full bg-red-300 h-44 ">
                        <PieChart />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

const PDItems = () => {
    return (
        <ul className="w-full flex justify-between items-center gap-4 px-2">
            { reporting_items.map(item => <ListItem key={item.id} item={item} />) }
        </ul>
    )
};

const ListItem = ({item:{icon, name, content}}) => {
    return (
        <li className="w-72 h-64 flex flex-col justify-center items-center gap-3">
            <span className="w-24 h-24">{icon}</span>
            <div className="flex flex-col justify-center items-center">
                <span className="text-2xl font-semibold">{content}</span>
                <span className="text-md font-light whitespace-pre-wrap">{name}</span>
            </div>
        </li>
    );
};

export default Breakdown;