import { colors, heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { AcademicsIcon, AptitudeIcon, AssessmentIcon, CertificateIcon, PersonalityIcon } from "../components/icons";
import Subhead from "../components/Subhead";

// const content = {
//     attributes: [
//         {
//             id: 1,
//             content: "This is calculated on various attributes, like bachelor's degree grade, other program-specific attributes"
//         },
//         {
//             id: 2,
//             content: "This program enhances key professional skills such as communication, leadership, negotiation, teamwork, time management, and follow-through."
//         }
//     ],
//     benefits: [
//         {
//             id: 1,
//             content: "This is calculated on various attributes, like bachelor's degree grade, other program-specific attributes"
//         },
//         {
//             id: 2,
//             content: "This program enhances key professional skills such as communication, leadership, negotiation, teamwork, time management, and follow-through."
//         },
//         {
//             id: 3,
//             content: "On Demand, In-depth guidance on what to prepare, how to prepare and how to deliver your best interviews"
//         }
//     ]
// };

const attributes = [
    {
        id: 1,
        name: "Academics",
        icon: AcademicsIcon
    },
    {
        id: 2,
        name: "Aptitude Tests",
        icon: AptitudeIcon
    },
    {
        id: 3,
        name: "Assessments",
        icon: AssessmentIcon
    },
    {
        id: 4,
        name: "Personality Development",
        icon: PersonalityIcon
    },
    {
        id: 5,
        name: "Certifications",
        icon: CertificateIcon
    },
]

const SkillCheck = () => {
    const screen = localStorage.getItem('screen') || 'laptop';
  return (
    <BaseSlide>
        <BaseHeader text={main_headings.slide6.text} />
        <BaseContentDiv text="">
            <Subhead text="Skill Check Attribute Criteria" />
            <Content />
        </BaseContentDiv>
    </BaseSlide>
  );
}

const Content = () => {
    return (
        <div className="w-full flex justify-evenly items-start space-x-4">
            <AttributeDisplay />
            <BenefitsDisplay />
        </div>
    )
}

const AttributeItem = ({item: {name, icon}}) => {
    return (
        <div className="flex justify-start items-center space-x-2">
            <span className="w-7 h-7">{icon}</span>
            <span className="">{name}</span>
        </div>
    )
}

const AttributeDisplay = () => {
    return (
        <div className="w-[50%] flex justify-center items-center -space-x-5">
            <div className="text-xl px-7">Skill Check Attributes</div>
            <span className="flex justify-start text-[15rem] font-lighter text-teal-600">{`{`}</span>
            <div className="flex flex-col items-start justify-around space-y-2">
                {attributes.map(item => <AttributeItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

const BenefitsDisplay = () => {
    return (
        <div className="w-[30%] flex flex-col justify-center items-start">
            <span className="font-light text-3xl">Benefits</span>
            <div className="">
                <li>100% Job Placements</li>
                <li>Technological Advancements</li>
                <li>Higher Employment Rate</li>
            </div>
        </div>
    )
}

export default SkillCheck;