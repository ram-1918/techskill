import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { AccentureIcon, AmazonIcon, CognizantIcon, DellIcon, DeloitteIcon, GoogleIcon, HCLIcon, IBMIcon, InfosysIcon, MetaIcon, MicrosoftIcon, TCSIcon, WiproIcon, ZohoIcon } from "../components/icons";
import Tooltip from "../components/Tooltip";

const pd_items = [
    {
        id: 1,
        name: "Google",
        icon: GoogleIcon
    },
    {
        id: 2,
        name: "Meta",
        icon: MetaIcon
    },
    {
        id: 3,
        name: "Amazon",
        icon: AmazonIcon
    },
    {
        id: 4,
        name: "Microsoft",
        icon: MicrosoftIcon
    },
    {
        id: 5,
        name: "Infosys",
        icon: InfosysIcon
    },
    {
        id: 6,
        name: "Deloitte",
        icon: DeloitteIcon
    },
    {
        id: 7,
        name: "TCS",
        icon: TCSIcon
    },
    {
        id: 8,
        name: "Zoho",
        icon: ZohoIcon
    },
    {
        id: 9,
        name: "IBM",
        icon: IBMIcon
    },
    {
        id: 10,
        name: "Dell",
        icon: DellIcon
    },
    {
        id: 11,
        name: "HCL",
        icon: HCLIcon
    },
    {
        id: 12,
        name: "Cognizant",
        icon: CognizantIcon
    },
    {
        id: 13,
        name: "Accenture",
        icon: AccentureIcon
    },
    {
        id: 14,
        name: "Wipro",
        icon: WiproIcon
    }
]

const Placements = () => {
  return (
    <BaseSlide>
        <BaseHeader text={main_headings.slide7.text}/>
        <BaseContentDiv text="Program Execution Partners">
            <PlacementItems />
            <span className="w-full text-center font-light">... and many others</span>
        </BaseContentDiv>
    </BaseSlide>
  );
}

const PlacementItems = () => {
return (
        <ul className="w-full flex justify-center items-center flex-wrap gap-8 px-2">
            { pd_items.map(item => <ListItem key={item.id} item={item} />) }
        </ul>
    )
};

const ListItem = ({item:{icon, name}}) => {
    return (
        <li className="group relative px-4 flex flex-col justify-center items-center gap-2">
            <span className="w-20 h-20 rounded-full overflow-hidden bg-center bg-cover">{icon}</span>
            <Tooltip name={name} />
        </li>
    );
};

export default Placements;