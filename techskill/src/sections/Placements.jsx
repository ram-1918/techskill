import { useTranslation } from "react-i18next";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import {
  AccentureIcon,
  AmazonIcon,
  AppleIcon,
  CognizantIcon,
  DellIcon,
  DeloitteIcon,
  GoogleIcon,
  HCLIcon,
  IBMIcon,
  InfosysIcon,
  MetaIcon,
  MicrosoftIcon,
  MindtreeIcon,
  TCSIcon,
  TechMIcon,
  WiproIcon,
} from "../components/icons";
import Tooltip from "../components/Tooltip";
import { heading_font_size, icon_sizes } from "../Base";

const pd_items = [
  {
    id: 15,
    name: "Apple",
    icon: AppleIcon,
  },
  {
    id: 1,
    name: "Google",
    icon: GoogleIcon,
  },
  {
    id: 2,
    name: "Meta",
    icon: MetaIcon,
  },
  {
    id: 3,
    name: "Amazon",
    icon: AmazonIcon,
  },
  {
    id: 4,
    name: "Microsoft",
    icon: MicrosoftIcon,
  },
  {
    id: 10,
    name: "Dell",
    icon: DellIcon,
  },
  {
    id: 5,
    name: "Infosys",
    icon: InfosysIcon,
  },
  {
    id: 6,
    name: "Deloitte",
    icon: DeloitteIcon,
  },
  {
    id: 7,
    name: "TCS",
    icon: TCSIcon,
  },
  {
    id: 8,
    name: "Tech Mahindra",
    icon: TechMIcon,
  },
  {
    id: 16,
    name: "LTI mindtree",
    icon: MindtreeIcon,
  },
  {
    id: 9,
    name: "IBM",
    icon: IBMIcon,
  },
  {
    id: 11,
    name: "HCL",
    icon: HCLIcon,
  },
  {
    id: 12,
    name: "Cognizant",
    icon: CognizantIcon,
  },
  {
    id: 13,
    name: "Accenture",
    icon: AccentureIcon,
  },
  {
    id: 14,
    name: "Wipro",
    icon: WiproIcon,
  },
];

const Placements = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <BaseSlide id="placements" {...props}>
      <BaseHeader text={main_headings.slide7.text} />
      <BaseContentDiv text="program execution partners">
      <div className="flex flex-col items-center justify-around w-full h-full">
        <PlacementItems />
        <span className={`${heading_font_size.content} w-full font-light text-center`}>
          ... {t("and many others")}
        </span>
        <div className="w-full h-2 "></div>
      </div>
      </BaseContentDiv>
    </BaseSlide>
  );
};

const PlacementItems = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center w-full gap-12 px-2 gap-y-10">
      {pd_items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item: { icon, name } }) => {
  return (
    <li className={`relative flex flex-col items-center justify-center group bg-blue-500 rounded-full overflow-hidden`}>
      {/* <span className={` bg-center bg-cover rounded-full w-full h-full ${icon_sizes.xl}`}> */}
        {icon}
      {/* </span> */}
      <Tooltip name={name} />
    </li>
  );
};

export default Placements;
