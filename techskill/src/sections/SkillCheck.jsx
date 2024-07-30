import {
  faArrowRight,
  faCheck,
  faTrophy,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { heading_font_size, icon_sizes } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import {
  AcademicsIcon,
  AptitudeIcon,
  AssessmentIcon,
  AttributesIcon,
  BenefitsIcon,
  CertificateIcon,
  PersonalityIcon,
} from "../components/icons";
import Subhead from "../components/Subhead";

const attributes = [
  {
    id: 1,
    name: "academics",
    icon: AcademicsIcon,
  },
  {
    id: 2,
    name: "aptitude tests",
    icon: AptitudeIcon,
  },
  {
    id: 3,
    name: "assessments",
    icon: AssessmentIcon,
  },
  {
    id: 4,
    name: "personality development",
    icon: PersonalityIcon,
  },
  {
    id: 5,
    name: "certifications",
    icon: CertificateIcon,
  },
];

const benefits = [
  {
    id: 1,
    name: "performance assessment",
    icon: AcademicsIcon,
  },
  {
    id: 2,
    name: "career development",
    icon: AptitudeIcon,
  },
  {
    id: 4,
    name: "resource allocation",
    icon: PersonalityIcon,
  },
  {
    id: 5,
    name: "quality assurance",
    icon: CertificateIcon,
  },
  {
    id: 3,
    name: "skill check score aids screening",
    icon: AssessmentIcon,
  },
];

const SkillCheck = ({ ...props }) => {
  return (
    <BaseSlide id="skillcheck" {...props}>
      <BaseHeader text={main_headings.slide6.text} />
      <BaseContentDiv text="steps involved, attributes & benefits">
        <Content />
      </BaseContentDiv>
    </BaseSlide>
  );
};

const Content = () => {
  return (
    <div className="w-full">
      <AttributeDisplay />
    </div>
  );
};

const AttributeDisplay = () => {
  return (
    <div className="flex flex-col w-full gap-4 mobile:w-full mobile:h-fit flex-start">
      <Steps />
      <div className="flex items-start justify-around w-full">
        <Layout icon={AttributesIcon} title="primary skill check attributes">
          {attributes.map((item) => (
            <AttributeItem key={item.id} item={item} />
          ))}
        </Layout>
        <Layout icon={BenefitsIcon} title="benefits of skill check score">
          {benefits.map((item) => (
            <BenefitItem key={item.id} item={item} />
          ))}
        </Layout>
      </div>
    </div>
  );
};

const Steps = () => {
  const { t } = useTranslation();
  const RightArrow = (
    <FontAwesomeIcon
      className={`w-fit ${heading_font_size.sub} text-gray-600`}
      icon={faArrowRight}
    />
  );
  const textstyles = "font-bold text-md capitalize";
  const divstyles = " flex flex-col justify-start items-center text-center";
  const screen = localStorage.getItem("screen") || "medium-laptop";

  return (
    <div
      style={{ fontSize: heading_font_size.subcontent[screen] }}
      className="flex items-center justify-around w-full px-2 h-fit"
    >
      <div className={divstyles}>
        <span>
          {<FontAwesomeIcon className={icon_sizes.lg} icon={faUserCheck} />}
        </span>
        <span className={`${textstyles} ${heading_font_size.subcontent}`}>{t("register & aptitude tests")}</span>
      </div>
      {RightArrow}
      <div className={divstyles}>
        <span className={icon_sizes.lg}>{AssessmentIcon}</span>
        <span className={`${textstyles} ${heading_font_size.subcontent}`}>{t("assessments")}</span>
      </div>
      {RightArrow}
      <div className={divstyles}>
        <span className={icon_sizes.lg}>{CertificateIcon}</span>
        <span className={`${textstyles} ${heading_font_size.subcontent}`}>{t("certifications")}</span>
      </div>
      {RightArrow}
      <div className={divstyles}>
        <span>{<FontAwesomeIcon className={icon_sizes.lg} icon={faTrophy} />}</span>
        <span className={`${textstyles} ${heading_font_size.subcontent}`}>
          {t("succussfully obtains a skill check score")}
        </span>
      </div>
    </div>
  );
};

const Layout = ({ children, icon, title }) => {
  const { t } = useTranslation();
  const screen = localStorage.getItem("screen") || "medium-laptop";
  return (
    <div className="w-[40%] overflow-hidden border rounded-xl shadow-lg flex flex-col justify-center items-center">
      <span
        style={{ fontSize: heading_font_size.content[screen] }}
        className={`${heading_font_size.content} w-full px-2 py-1 font-semibold text-center capitalize bg-teal-200`}
      >
        {t(title)}
      </span>
      <div
        style={{ fontSize: heading_font_size.content[screen] }}
        className="flex items-center justify-around w-full p-2"
      >
        <span className={icon_sizes.xl}>
          {icon}
        </span>
        <div className={`${heading_font_size.content} flex flex-col items-start justify-start space-y-1`}>
          {children}
        </div>
      </div>
    </div>
  );
};

const BenefitItem = ({ item: { name } }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-start px-2 space-x-2 capitalize">
      <span className="w-full capitalize">
        {<FontAwesomeIcon icon={faCheck} className={icon_sizes.small} />} {t(name)}
      </span>
    </div>
  );
};

const AttributeItem = ({ item: { name, icon } }) => {
  const screen = localStorage.getItem("screen") || "medium-laptop";
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-start w-full px-2 space-x-2 capitalize">
      <span className={icon_sizes.small}>{icon}</span>
      <span className="">{t(name)}</span>
    </div>
  );
};

export default SkillCheck;
