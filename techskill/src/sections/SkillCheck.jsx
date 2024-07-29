import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors, heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { AcademicsIcon, AptitudeIcon, AssessmentIcon, AttributesIcon, BenefitsIcon, CertificateIcon, LeftBracketIcon, PersonalityIcon, SkillcheckIcon } from "../components/icons";
import Subhead from "../components/Subhead";
import { faArrowRight, faBarChart, faCheck, faGauge, faGaugeHigh, faLineChart, faMeteor, faRightLong, faTrophy, faUserCheck } from "@fortawesome/free-solid-svg-icons";
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
/*
> 100% job placement
> student acquires invaluable knowledge
> companies can use skill check score as part of screening process
*/

const benefits = [
    {
        id: 1,
        name: "performance assessment",
        icon: AcademicsIcon
    },
    {
        id: 2,
        name: "career development",
        icon: AptitudeIcon
    },
    {
        id: 4,
        name: "resource allocation",
        icon: PersonalityIcon
    },
    {
        id: 5,
        name: "quality assurance",
        icon: CertificateIcon
    },
    {
        id: 3,
        name: "skill check score aids screening",
        icon: AssessmentIcon
    },
]

const SkillCheck = ({...props}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
  return (
    <BaseSlide id="skillcheck" {...props}>
        <BaseHeader text={main_headings.slide6.text} />
        <BaseContentDiv text="">
            <Subhead text="steps involved, attributes & benefits" />
            <Content />
        </BaseContentDiv>
    </BaseSlide>
  );
}

const Content = () => {
    return (
        <div className="w-full">
            <AttributeDisplay />
        </div>
    )
}

const AttributeDisplay = () => {
    return (
        <div className="w-full mobile:w-full mobile:h-fit flex flex-col flex-start gap-4">
            <Steps />
            <div className="w-full flex justify-around items-start">
                <Layout icon={AttributesIcon} title="primary skill check attributes">
                    {attributes.map(item => <AttributeItem key={item.id} item={item} />)}
                </Layout>
                <Layout icon={BenefitsIcon} title="benefits of skill check score">
                    {benefits.map(item => <BenefitItem key={item.id} item={item} />)}
                </Layout>
            </div>
        </div>
    )
};

const Steps = () => {
    const RightArrow = <FontAwesomeIcon className="w-fit text-[5rem] text-gray-600" icon={faArrowRight} />;
    const textstyles = "leading-5 font-bold text-md capitalize";
    const divstyles = "w-32 flex flex-col justify-start items-center text-center";
    const screen = localStorage.getItem('screen') || 'laptop';

    return (
        <div style={{fontSize:heading_font_size.subcontent[screen]}} className="w-full h-fit flex justify-between items-start px-2">
            <div className={divstyles}>
                <span>{<FontAwesomeIcon className="w-20 h-20" icon={faUserCheck} />}</span>
                <span className={textstyles}>register + aptitude tests</span>
            </div>
            {RightArrow}
            <div className={divstyles}>
                <span className="w-20 h-20">{AssessmentIcon}</span>
                <span className={textstyles}>assessments</span>
            </div>
            {RightArrow}
            <div className={divstyles}>
                <span className="w-20 h-20">{CertificateIcon}</span>
                <span className={textstyles}>certifications</span>
            </div>
            {RightArrow}
            <div className={divstyles}>
                <span>{<FontAwesomeIcon className="w-20 h-20" icon={faTrophy} />}</span>
                <span className={textstyles}>succussfully obtains a skill check score</span>
            </div>
        </div>
    )
};

const Layout = ({children, icon, title}) => {
    const { t } = useTranslation();
    const screen = localStorage.getItem('screen') || 'laptop';
    return (    
        <div className="w-[40%] overflow-hidden border rounded-xl shadow-lg flex flex-col justify-center items-center">
            <span style={{fontSize:heading_font_size.content[screen]}}  className="w-full capitalize px-2 text-center font-semibold bg-teal-200 py-1">{t(title)}</span>
            <div style={{fontSize:heading_font_size.content[screen]}} className="w-full flex items-center justify-around p-2">
                <span className="desktop:w-24 desktop:h-24 laptop:w-24 laptop:h-24 tablet:w-24 tablet:h-24 mobile:w-10 small:w-10 mobile:h-10 small:h-10">{icon}</span>
                <div className="flex flex-col justify-start items-start space-y-1">
                    {children}
                </div>
            </div>
        </div>
    )
}

const BenefitItem = ({item:{name}}) => {
    const { t } = useTranslation();
    return (
        <div className="flex justify-start items-center space-x-2 px-2 capitalize">
            <span className="capitalize w-full">{<FontAwesomeIcon icon={faCheck} />}{" "}{t(name)}</span>
        </div>
    )
};

const AttributeItem = ({item: {name, icon}}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    const { t } = useTranslation();
    return (
        <div className="w-full flex justify-start items-center space-x-2 px-2 capitalize">
            <span className="w-6 h-6 mobile:w-5 mobile:h-5">{icon}</span>
            <span className="">{t(name)}</span>
        </div>
    )
};

export default SkillCheck;