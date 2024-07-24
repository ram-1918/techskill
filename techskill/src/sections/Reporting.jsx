import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import { CertifiedIcon, LocationsIcon, PlacedIcon, RegistedIcon } from "../components/icons";

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
        name: "Certified Resources",
        icon: CertifiedIcon,
        content: "2,302,251"
    },
    {
        id: 4,
        name: "Placed Resources",
        icon: PlacedIcon,
        content: "2,000,375"
    }
]

const Reporting = () => {
  return (
    <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
        <BaseHeader text="Comprehensive & robust personality development program" />
        <BaseContentDiv text="Progress Reporting Attributes">
            <PDItems />
        </BaseContentDiv>
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

export default Reporting;