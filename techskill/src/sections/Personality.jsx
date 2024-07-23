import BaseHeader from "../components/BaseHeader";
import { CommunicationIcon, InterviewIcon, SoftIcon } from "../components/icons";

const pd_items = [
    {
        id: 1,
        name: "Communication Skills",
        icon: CommunicationIcon,
        content: "In today's competitive job market, developing effective communication skills is essential for conveying information efficiently and effectively in the business world."
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
    <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
        <BaseHeader text="Comprehensive & robust personality development program" />
        <div className="w-full p-2 flex flex-col justify-center items-start gap-5">
            <span className="font-light text-xl text-sky-700 underline underline-offset-2">Personality Development Program Curricullam</span>
            <PDItems />
        </div>
    </section>
  );
}

const PDItems = () => {
    return (
        <ul className="w-full flex justify-between items-center gap-4 px-2">
            { pd_items.map(item => <ListItem key={item.id} item={item} />) }
        </ul>
    )
};

const ListItem = ({item:{icon, name, content}}) => {
    return (
        <li className="w-72 h-64 flex flex-col justify-start items-start gap-3">
            <span className="w-24 h-24">{icon}</span>
            <div className="flex flex-col justify-start items-start">
                <span className="text-xl font-semibold">{name}</span>
                <span className="text-sm font-light whitespace-pre-wrap">{content}</span>
            </div>
        </li>
    );
};

export default Personality;