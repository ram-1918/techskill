
import { useTranslation } from "react-i18next";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import { APImage } from "../components/BaseImages";
import BaseSlide from "../components/BaseSlide";
import CBN from "../components/CBN";
import { main_headings } from "../components/data";
import Lokesh from "../components/Lokesh";
import PK from "../components/PK";
import { colors, heading_font_size } from "../Base";

const contents = [
    {
        id: 1,
        slidenum: "01",
        slide_id: "why",
        title: "skill development program after graduation"
    },
    {
        id: 2,
        slidenum: "02",
        slide_id: "regions",
        title: "regions to benefit from the program"
    },
    {
        id: 3,
        slidenum: "03",
        slide_id: "technologies",
        title: "encompassing various technologies"
    },
    {
        id: 4,
        slidenum: "04",
        slide_id: "certifications",
        title: "value added certifications"
    },
    {
        id: 5,
        slidenum: "05",
        slide_id: "personality",
        title: "comprehensive personality development program"
    },
    {
        id: 6,
        slidenum: "06",
        slide_id: "skillcheck",
        title: "about our skill check attribute"
    },
    {
        id: 7,
        slidenum: "07",
        slide_id: "placements",
        title: "companies that can exploit this program"
    },
    {
        id: 8,
        slidenum: "08",
        slide_id: "reporting",
        title: "deliverable updates"
    },
    {
        id: 9,
        slidenum: "09",
        slide_id: "breakdown",
        title: "score check simulation"
    },
    {
        id: 10,
        slidenum: "10",
        slide_id: "about",
        title: "about me & our companies"
    },
    // {
    //     id: 10,
    //     slidenum: "10",
    //     slide_id: "thankyou",
    //     title: "thank you"
    // },

];

const Menu = () => {
    return (
        <BaseSlide>
            <BaseHeader text="table of contents" />
            <BaseContentDiv>
                <div className="flex flex-col items-center justify-around w-full h-full">
                    <MenuItems />
                    <div className="h-2"></div>
                </div>
            </BaseContentDiv>
        </BaseSlide>
    )
};

const MenuItems = () => {
    return (
        <div className="grid grid-flow-row grid-cols-2 gap-12 py-4 medium-phone:gap-6 large-phone:gap-6 small-phone:grid-cols-1 small-tablet:grid-cols-1 large-tablet:grid-cols-1 small-phone:gap-2 small-tablet:gap-3 large-tablet:gap-4">
            {contents.map(item => <MenuItem id={item.id} item={item} />)}
        </div>
    );
};

const MenuItem = ({item:{slidenum, title, slide_id}}) => {
    const { t } = useTranslation();
    const screen = localStorage.getItem('screen') || 'medium-laptop';
    return (
        <a 
        style={{fontSize: heading_font_size.content[screen], backgroundColor:colors.bg_color}} 
        href={`#${slide_id}`} 
        className={`${heading_font_size.content} capitalize rounded-lg shadow-lg p-1 flex flex-row justify-start items-center space-x-4 cursor-pointer`}>
            <span style={{fontWeight:"800"}}>{slidenum}</span>
            <span style={{fontWeight: "600"}}>{t(title)}</span>
        </a>
    )
}

export default Menu;