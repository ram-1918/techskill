import { useTranslation } from "react-i18next";
import { colors, heading_font_size, icon_sizes } from "../Base";
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
    const screen = localStorage.getItem('screen') || 'medium-laptop'; 
    const { t } = useTranslation();
    return (
    <BaseSlide id="reporting" {...props}>
        <BaseHeader text={main_headings.slide8.text} />
        <BaseContentDiv text="progress reporting attributes">
            <div className="flex flex-col items-center justify-around w-full h-full ">
                <PDItems />
                <div className="h-2"></div>
            </div>
        </BaseContentDiv>
        <span style={{fontSize: heading_font_size.subcontent[screen]}} className="absolute bottom-0 text-[0.7rem] py-2">* {t("above numerical figures are just for illustration purposes")}.</span>
    </BaseSlide>
  );
}

const PDItems = () => {
    return (
        <ul className="flex items-center justify-around w-full px-2 h-fit laptop:grid-cols-4 tablet:grid-cols-4 mobile:grid-cols-2 small:grid-cols-2 mobile:px-0 small:px-0">
            { reporting_items.map(item => <ListItem key={item.id} item={item} />) }
        </ul>
    )
};

const ListItem = ({item:{icon, name, content}}) => {
    const screen = localStorage.getItem('screen') || 'medium-laptop'; 
    const { t } = useTranslation();
    return (
        <li className="flex flex-col items-center justify-start gap-3">
            <span className={`${icon_sizes.lg} rounded-full`}>{icon}</span>
            <div className="flex flex-col items-center justify-center">
                <span style={{fontSize:heading_font_size.sub[screen], color: colors.sub}} className={`${heading_font_size.content} font-semibold`}>{t(content)}</span>
                <span style={{color: colors.content}} className={` ${heading_font_size.content} font-medium capitalize text-center whitespace-pre-wrap`}>{t(name)}</span>
            </div>
        </li>
    );
};

export default Reporting;