import { heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { CommunicationIcon, InterviewIcon, SoftIcon } from "../components/icons";

const pd_items = [
    {
        id: 1,
        name: "Communication Skills",
        icon: CommunicationIcon,
        content: "Effective communication skills are key to advancing careers, enhancing professional competence, and fostering reflective learning within organizations."
    },
    {
        id: 3,
        name: "Soft Skills",
        icon: SoftIcon,
        content: "This program enhances key professional skills such as communication, leadership, negotiation, teamwork, time management, and follow-through."
    },
    {
        id: 2,
        name: "Interview Prepation",
        icon: InterviewIcon,
        content: "On Demand, In-depth guidance on what to prepare, how to prepare and how to deliver your best interviews"
    }
]

const Personality = () => {
  return (
    // <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
    <BaseSlide>
        <BaseHeader text={main_headings.slide5.text} />
        <BaseContentDiv text="Personality Development Program Curricullam">
            <PDItems />
        </BaseContentDiv>
    </BaseSlide>
  );
}

const PDItems = () => {
    return (
        <ul className="w-full flex justify-center items-center gap-4 px-2">
            { pd_items.map(item => <ListItem key={item.id} item={item} />) }
        </ul>
    )
};

const ListItem = ({item:{icon, name, content}}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    return (
        <li className="w-72 h-64 flex flex-col justify-center items-center gap-3">
            <span className="w-24 h-24">{icon}</span>
            <div className="flex flex-col justify-center items-center gap-1.5">
                <span style={{fontSize:heading_font_size.sub[screen]}} className="text-xl font-semibold">{name}</span>
                <span style={{fontSize:heading_font_size.subcontent[screen]}} className="text-center text-sm font-light whitespace-pre-wrap">{content}</span>
            </div>
        </li>
    );
};

export default Personality;