import { colors, heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import Subhead from "../components/Subhead";

const content = {
    attributes: [
        {
            id: 1,
            content: "This is calculated on various attributes, like bachelor's degree grade, other program-specific attributes"
        },
        {
            id: 2,
            content: "This program enhances key professional skills such as communication, leadership, negotiation, teamwork, time management, and follow-through."
        }
    ],
    benefits: [
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
};

const SkillCheck = () => {
    const screen = localStorage.getItem('screen') || 'laptop';
  return (
    // <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
    <BaseSlide>
        <BaseHeader text={main_headings.slide6.text} />
        <BaseContentDiv text="">
            {/* <span style={{fontSize:heading_font_size.sub[screen], color:colors.sub}} className="font-light text-xl">Skill Check Attribute Criteria</span> */}
            <Subhead text="Skill Check Attribute Criteria" />
            <SkillCheckList type='attributes'  />
            <Subhead text="Who Benefits From Skill Check Score?" />
            <SkillCheckList type='benefits' />
        </BaseContentDiv>
    </BaseSlide>
  );
}

const SkillCheckList = ({type}) => {
    return (
        <ul className="w-full flex flex-col justify-start items-start gap-2 px-2">
            {content[type].map(item => <ListItem key={item} item={item} />)}
        </ul>
    );
};

const ListItem = ({item:{content}}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    return (
        <li className="list-disc ">
            <span style={{fontSize:heading_font_size.content[screen]}} className="whitespace-pre-wrap">{content}</span>
        </li>
    );
};

export default SkillCheck;