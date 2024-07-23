import BaseHeader from "../components/BaseHeader";
import { AccentureIcon, CognizantIcon, CommunicationIcon, HCLIcon, IBMIcon, InfosysIcon, InterviewIcon, SoftIcon, TCSIcon, WiproIcon, ZohoIcon } from "../components/icons";

const pd_items = [
    {
        id: 1,
        name: "Infosys",
        icon: InfosysIcon
    },
    {
        id: 2,
        name: "TCS",
        icon: TCSIcon
    },
    {
        id: 3,
        name: "Zoho",
        icon: ZohoIcon
    },
    {
        id: 4,
        name: "IBM",
        icon: IBMIcon
    },
    {
        id: 5,
        name: "IBM",
        icon: IBMIcon
    },
    {
        id: 6,
        name: "HCL",
        icon: HCLIcon
    },
    {
        id: 7,
        name: "Cognizant",
        icon: CognizantIcon
    },
    {
        id: 8,
        name: "Accenture",
        icon: AccentureIcon
    },
    {
        id: 9,
        name: "Wipro",
        icon: WiproIcon
    }
]

const Placements = () => {
  return (
    <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
        <BaseHeader text="Comprehensive & robust personality development program" />
        <div className="w-full p-2 flex flex-col justify-center items-start gap-5">
            <span className="font-light text-xl text-sky-700 underline underline-offset-2">Program Execution Partners</span>
            <PDItems />
            <span className="w-full text-center font-light">... and many others</span>
        </div>
    </section>
  );
}

const PDItems = () => {
    return (
        <ul className="w-full flex justify-center items-center flex-wrap gap-4 px-2">
            { pd_items.map(item => <ListItem key={item.id} item={item} />) }
        </ul>
    )
};

const ListItem = ({item:{icon}}) => {
    return (
        <li className="px-4 flex flex-col justify-center items-center gap-3">
            <span className="w-24 h-24 rounded-full overflow-hidden bg-center bg-cover">{icon}</span>
        </li>
    );
};

export default Placements;