import { colors, heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
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
    const screen = localStorage.getItem('screen') || 'laptop'; 
    return (
    <BaseSlide>
        <BaseHeader text={main_headings.slide8.text} />
        <BaseContentDiv text="Progress Reporting Attributes">
            <PDItems />
        </BaseContentDiv>
        <span style={{fontSize: heading_font_size.subcontent[screen]}} className="absolute bottom-0 text-[0.8rem]">* Above numerical figures are just for illustration purposes.</span>
    </BaseSlide>
  );
}

const PDItems = () => {
    return (
        <ul className="w-full h-full flex justify-center items-center gap-4 px-2">
            { reporting_items.map(item => <ListItem key={item.id} item={item} />) }
        </ul>
    )
};

const ListItem = ({item:{icon, name, content}}) => {
    const screen = localStorage.getItem('screen') || 'laptop'; 
    return (
        <li className="w-72 h-64 mobile:h-44 flex flex-col justify-start items-center gap-3">
            <span className="w-28 h-28 mobile:w-16 mobile:h-16 bg-white p-4 rounded-full">{icon}</span>
            <div className="flex flex-col justify-center items-center">
                <span style={{fontSize:heading_font_size.sub[screen], color: colors.content}} className="text-xl font-semibold mobile:leading-3">{content}</span>
                <span style={{fontSize:heading_font_size.subcontent[screen], color: colors.subcontent}} className="text-center text-sm font-light whitespace-pre-wrap mobile:leading-3">{name}</span>
            </div>
        </li>
    );
};

export default Reporting;