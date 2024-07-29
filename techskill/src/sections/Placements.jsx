import { useTranslation } from "react-i18next";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { AccentureIcon, AmazonIcon, AppleIcon, CognizantIcon, DellIcon, DeloitteIcon, GoogleIcon, HCLIcon, IBMIcon, InfosysIcon, MetaIcon, MicrosoftIcon, MindtreeIcon, TCSIcon, TechMIcon, WiproIcon, ZohoIcon } from "../components/icons";
import Tooltip from "../components/Tooltip";

const pd_items = [
    {
        id: 15,
        name: "Apple",
        icon: AppleIcon
    },
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
        id: 10,
        name: "Dell",
        icon: DellIcon
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
        name: "Tech Mahindra",
        icon: TechMIcon
    },
    {
        id: 16,
        name: "LTI mindtree",
        icon: MindtreeIcon
    },
    {
        id: 9,
        name: "IBM",
        icon: IBMIcon
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

const Placements = ({...props}) => {
    const { t } = useTranslation();
  return (
    <BaseSlide id="placements" {...props}>
        <BaseHeader text={main_headings.slide7.text}/>
        <BaseContentDiv text="program execution partners">
            <PlacementItems />
            <span className="w-full text-center font-light">... {t("and many others")}</span>
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
        <li className="group relative px-4 mobile:px-1 flex flex-col justify-center items-center gap-2">
            <span className="w-20 h-20 mobile:w-8 mobile:h-8 rounded-full overflow-hidden bg-center bg-cover">{icon}</span>
            <Tooltip name={name} />
        </li>
    );
};

export default Placements;