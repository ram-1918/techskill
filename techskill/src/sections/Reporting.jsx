import { useTranslation } from "react-i18next";
import { colors, heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { CertifiedIcon, LocationsIcon, PlacedIcon, RegistedIcon } from "../components/icons";

const reporting_items = [
    {
        id: 1,
        name: "students registered",
        icon: RegistedIcon,
        content: "2,423,422"
    },
    {
        id: 2,
        name: "skill check centers",
        icon: LocationsIcon,
        content: "456"
    },
    {
        id: 3,
        name: "certified resources",
        icon: CertifiedIcon,
        content: "2,302,251"
    },
    {
        id: 4,
        name: "placed resources",
        icon: PlacedIcon,
        content: "2,000,375"
    }
]

const Reporting = ({...props}) => {
    const screen = localStorage.getItem('screen') || 'laptop'; 
    const { t } = useTranslation();
    return (
    <BaseSlide id="reporting" {...props}>
        <BaseHeader text={main_headings.slide8.text} />
        <BaseContentDiv text="progress reporting attributes">
            <PDItems />
        </BaseContentDiv>
        <span style={{fontSize: heading_font_size.subcontent[screen]}} className="absolute bottom-0 text-[0.7rem] py-2">* {t("above numerical figures are just for illustration purposes")}.</span>
    </BaseSlide>
  );
}

const PDItems = () => {
    return (
        <ul className="w-full h-full mobile:h-[60%] grid grid-flow-row desktop:grid-cols-4 laptop:grid-cols-4 tablet:grid-cols-4 mobile:grid-cols-2 small:grid-cols-2 gap-4 px-2 mobile:px-0 small:px-0">
            { reporting_items.map(item => <ListItem key={item.id} item={item} />) }
        </ul>
    )
};

const ListItem = ({item:{icon, name, content}}) => {
    const screen = localStorage.getItem('screen') || 'laptop'; 
    const { t } = useTranslation();
    return (
        <li className="flex flex-col items-center justify-start gap-3">
            <span className="w-32 h-32 p-4 rounded-full mobile:w-16 mobile:h-16 mobile:p-0">{icon}</span>
            <div className="flex flex-col items-center justify-center">
                <span style={{fontSize:heading_font_size.sub[screen], color: colors.sub}} className="text-xl font-semibold mobile:leading-3">{t(content)}</span>
                <span style={{fontSize:heading_font_size.content[screen], color: colors.content}} className="text-sm font-light text-center whitespace-pre-wrap mobile:leading-3">{t(name)}</span>
            </div>
        </li>
    );
};

export default Reporting;