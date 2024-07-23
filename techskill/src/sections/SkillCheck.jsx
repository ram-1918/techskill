import BaseHeader from "../components/BaseHeader";
import { CommunicationIcon, InterviewIcon, SoftIcon } from "../components/icons";

const skills_items = [
    {
        id: 1,
        content: "This is calculated on various attributes, like bachelor's degree grade, other program-specific attributes"
    },
    {
        id: 2,
        content: "This program enhances key professional skills such as communication, leadership, negotiation, teamwork, time management, and follow-through."
    },
    {
        id: 3,
        content: "On Demand, In-depth guidance on what to prepare, how to prepare and how to deliver your best interviews"
    }
]

const SkillCheck = () => {
  return (
    <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
        <BaseHeader text="Comprehensive & robust personality development program" />
        <div className="w-full p-2 flex flex-col justify-center items-start gap-5">
            <span className="font-light text-xl text-sky-700 underline underline-offset-2">Skill Check Attribute Criteria</span>
            <SkillCheckList  />
            <span className="font-light text-xl text-sky-700 underline underline-offset-2">Benefits</span>
            <SkillCheckList  />
        </div>
    </section>
  );
}

const SkillCheckList = () => {
    return (
        <ul className="w-full flex flex-col justify-start items-start gap-4 px-2">
            {skills_items.map(item => <ListItem key={item} item={item} />)}
        </ul>
    );
};

const ListItem = ({item:{content}}) => {
    return (
        <li className="list-disc ">
            <span className="text-lg font-light whitespace-pre-wrap">{content}</span>
        </li>
    );
};

export default SkillCheck;