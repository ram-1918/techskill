import { useTranslation } from "react-i18next";
import { colors, heading_font_size, icon_sizes } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { CommunicationIcon, InterviewIcon, SoftIcon } from "../components/icons";

const pd_items = [
    {
        id: 1,
        name: "communication skills",
        icon: CommunicationIcon,
        content: "effective communication skills are key to advancing careers, enhancing professional competence, and fostering reflective learning within organizations."
    },
    {
        id: 3,
        name: "soft skills",
        icon: SoftIcon,
        content: "this program enhances key professional skills such as communication, leadership, negotiation, teamwork, time management, and follow-through."
    },
    {
        id: 2,
        name: "interview prepation",
        icon: InterviewIcon,
        content: "on demand, in-depth guidance on what to prepare, how to prepare and how to deliver your best interviews"
    }
]

const Personality = ({...props}) => {
  return (
    // <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
    <BaseSlide id="personality" {...props}>
        <BaseHeader text={main_headings.slide5.text} />
        <BaseContentDiv text="personality development program curricullam">
            <PDItems />
        </BaseContentDiv>
    </BaseSlide>
  );
}

const PDItems = () => {
    return (
        <ul className="flex items-center justify-around w-full h-full gap-4 px-2">
            { pd_items.map(item => <ListItem key={item.id} item={item} />) }
        </ul>
    )
};

const ListItem = ({item:{icon, name, content}}) => {
    const screen = localStorage.getItem('screen') || 'small-laptop';
    const { t } = useTranslation();
    return (
        <li className="flex flex-col items-center justify-start w-[33%] h-[60%] gap-10">
            <span style={{backgroundColor: colors.bg_color}} className={`${icon_sizes.lg} rounded shadow-md`}>{icon}</span>
            <div className="flex flex-col items-center justify-between gap-2">
                <span style={{color: colors.content}} className={`${heading_font_size.content} font-bold text-center capitalize `}>{t(name)}</span>
                <p style={{color: colors.subcontent}} className={`${heading_font_size.subcontent} text-center capitalize tracking-wide leading-loose`}>{t(content)}</p>
            </div>
        </li>
    );
};

export default Personality;