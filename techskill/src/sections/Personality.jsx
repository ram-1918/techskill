import { useTranslation } from "react-i18next";
import { colors, heading_font_size } from "../Base";
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

const Personality = () => {
  return (
    // <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
    <BaseSlide id="personality">
        <BaseHeader text={main_headings.slide5.text} />
        <BaseContentDiv text="personality development program curricullam">
            <PDItems />
        </BaseContentDiv>
    </BaseSlide>
  );
}

const PDItems = () => {
    return (
        <ul className="w-full flex justify-around items-center px-2">
            { pd_items.map(item => <ListItem key={item.id} item={item} />) }
        </ul>
    )
};

const ListItem = ({item:{icon, name, content}}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    const { t } = useTranslation();
    return (
        <li className="w-72 h-64 flex flex-col justify-start items-center gap-3">
            <span style={{backgroundColor: colors.bg_color}} className="w-32 h-32 mobile:w-16 mobile:h-16 p-2 rounded shadow-md">{icon}</span>
            <div className="flex flex-col justify-center items-center gap-1.5">
                <span style={{fontSize:heading_font_size.content[screen], color: colors.content}} className="text-center capitalize text-xl font-semibold mobile:leading-3">{t(name)}</span>
                <span style={{fontSize:heading_font_size.subcontent[screen], color: colors.subcontent}} className="capitalize text-center text-sm font-light whitespace-pre-wrap mobile:leading-3">{t(content)}</span>
            </div>
        </li>
    );
};

export default Personality;