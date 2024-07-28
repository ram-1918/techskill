import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors, heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { AcademicsIcon, AptitudeIcon, AssessmentIcon, CertificateIcon, LeftBracketIcon, PersonalityIcon } from "../components/icons";
import Subhead from "../components/Subhead";
import { faBarChart, faLineChart } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

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
        name: "academics",
        icon: AcademicsIcon
    },
    {
        id: 2,
        name: "aptitude tests",
        icon: AptitudeIcon
    },
    {
        id: 3,
        name: "assessments",
        icon: AssessmentIcon
    },
    {
        id: 4,
        name: "personality development",
        icon: PersonalityIcon
    },
    {
        id: 5,
        name: "certifications",
        icon: CertificateIcon
    },
]

const SkillCheck = () => {
    const screen = localStorage.getItem('screen') || 'laptop';
  return (
    <BaseSlide id="skillcheck">
        <BaseHeader text={main_headings.slide6.text} />
        <BaseContentDiv text="">
            <Subhead text="skill check attribute criteria" />
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

const AttributeDisplay = () => {
    const { t } = useTranslation();
    return (
        <div className="w-[50%] h-64 overflow-hidden flex justify-center items-center -space-x-5">
            <div className="text-xl px-7">{t("skill check attributes")}</div>
            <span className="text-[16rem] leading-None font-light inline-block align-text-top p-0 text-teal-500">{`{`}</span>
            <div className="flex flex-col items-start justify-around space-y-2">
                {attributes.map(item => <AttributeItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

const AttributeItem = ({item: {name, icon}}) => {
    const { t } = useTranslation();
    return (
        <div className="flex justify-start items-center space-x-2">
            <span className="w-7 h-7">{icon}</span>
            <span className="">{t(name)}</span>
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
            <div>
                {/* <FontAwesomeIcon className="text-[10rem]" icon={faLineChart} /> */}
            </div>
        </div>
    )
}

export default SkillCheck;