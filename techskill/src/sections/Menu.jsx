
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import { APImage } from "../components/BaseImages";
import BaseSlide from "../components/BaseSlide";
import CBN from "../components/CBN";
import { main_headings } from "../components/data";
import Lokesh from "../components/Lokesh";
import PK from "../components/PK";


const Menu = () => {
    return (
        <BaseSlide>
            <BaseHeader text="Table Of Contents" />
            <BaseContentDiv>
            <MenuItems />
            </BaseContentDiv>
        </BaseSlide>
    )
};

const contents = [
    {
        id: 1,
        slidenum: "01",
        slide_id: "why",
        title: "Skill Development Program After Graduation"
    },
    {
        id: 2,
        slidenum: "02",
        slide_id: "regions",
        title: "Regions To Benefit From The Program"
    },
    {
        id: 3,
        slidenum: "03",
        slide_id: "technologies",
        title: "Encompassing Various Technologies"
    },
    {
        id: 4,
        slidenum: "04",
        slide_id: "certifications",
        title: "Value Added Certifications"
    },
    {
        id: 5,
        slidenum: "05",
        slide_id: "personality",
        title: "Comprehensive Personality Development Program"
    },
    {
        id: 6,
        slidenum: "06",
        slide_id: "skillcheck",
        title: "About Our Skill Check Attribute"
    },
    {
        id: 7,
        slidenum: "07",
        slide_id: "placements",
        title: "Companies That Can Exploit This Program"
    },
    {
        id: 8,
        slidenum: "08",
        slide_id: "reporting",
        title: "Delivarable Updates"
    },
    {
        id: 9,
        slidenum: "09",
        slide_id: "breakdown",
        title: "Score Check Simulation"
    },
    {
        id: 10,
        slidenum: "10",
        slide_id: "thankyou",
        title: "Thank You"
    },

];

const MenuItems = () => {
    return (
        <div className="grid grid-flow-row grid-cols-2 gap-4 py-3">
            {contents.map(item => <MenuItem id={item.id} item={item} />)}
        </div>
    );
};

const MenuItem = ({item:{slidenum, title, slide_id}}) => {
    return (
        <a href={`#${slide_id}`} className="rounded shadow p-1 flex flex-row justify-start items-center space-x-2 py-1 bg-[#C4DFDF] cursor-pointer">
            <span className="text-3xl">{slidenum}</span>
            <span>{title}</span>
        </a>
    )
}

export default Menu;