import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BaseHeader from "../components/BaseHeader";
import { SrinivasImage } from "../components/BaseImages";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import {
  Cloud5Icon,
    CloudservIcon,
    FacebookIcon,
    GmailIcon,
    I5techIcon,
    InstagramIcon,
    LinkedinIcon,
} from "../components/icons";
import Subhead from "../components/Subhead";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import BaseContentDiv from "../components/BaseContentDiv";
import { heading_font_size, icon_sizes } from "../Base";
import Tooltip from "../components/Tooltip";
import { useTranslation } from "react-i18next";

function About({...props}) {
  return (
    <BaseSlide {...props} id="about">
        <BaseHeader text={main_headings.slide10.text} />
        <BaseContentDiv>
          <ContentDiv />
        </BaseContentDiv>
    </BaseSlide>
  );
}

const ContentDiv = () => {
    return (
      <div className={`${heading_font_size.content} flex flex-col justify-center items-center`}>
        <div className="flex items-center justify-center gap-1 small-tablet:flex-col">
          <SrinivasImage size="w-48 h-48" />
          <Content />
        </div>
        <SocialMedia />
        <Details />
      </div>
  );
};

const Content = () => {
  const { t } = useTranslation();
    const content1 =
      "As the CEO of Cloudserv.ai specializing in Oracle-based products, I lead a dedicated team of 125 professionals. Our mission is to develop innovative solutions that not only drive business success but also contribute to the development of our country. By leveraging cutting-edge technology, we aim to create products that enhance the quality of life for our community and beyond.";
    const content2 = "I am a seasoned professional with 20 years of experience as a Cloud Solutions Architect, specializing in designing, implementing, and managing cloud-based solutions. In addition to my technical expertise, I have been successfully maintaining staffing and recruiting companies, showcasing strong leadership skills in ensuring efficient operations and successful talent acquisition. My extensive background in cloud architecture, team management, and strategic planning makes me a valuable asset in both technology and human resources domains."
    const content3 = "I am a seasoned professional with 20 years of experience as a Cloud Solutions Architect, specializing in designing, implementing, and managing cloud-based solutions. Beyond my technical expertise, I have been successfully maintianing staffing and recruiting companies, emphasizing training and skill development to foster efficient operations and successful talent acquisition. My extensive background in cloud architecture, team management, and strategic planning, coupled with my commitment to developing skills and nurturing talent, makes me a valuable asset in both technology and human resources domains."
    const content4 = "I am a seasoned Cloud Solutions Architect with a two-decade track record in designing, implementing, and managing cloud-based solutions. In addition to my technical proficiency, I possess a proven history of successfully leading and growing staffing and recruiting organizations. By emphasizing training and skill development, I have optimized operational efficiency and talent acquisition strategies. My combined expertise in cloud architecture, team management, strategic planning, and human capital development positions me as a versatile asset across both technology and human resources sectors."
    
    return (
        <span className="w-[50%] whitespace-pre-wrap font-medium small-tablet:w-full">
            {t(content4)}
        </span>
    )
}

// mandipudi@cloud5.ai
// +1 (201) 290-4385
// Srinivas Mandipudi

const Details = () => {
  const classnames = "space-x-2 flex justify-center items-center font-medium";
  return (
    <div className="flex items-center justify-center w-full py-1 space-x-8 small-tablet:flex-wrap">
      {/* <span className={classnames}>
        <FontAwesomeIcon icon={faLocationDot} />
        <span>Edison, NJ, USA</span>
      </span> */}
      <span className={classnames}>
        <FontAwesomeIcon icon={faPhone} />
        <a href="tel:+1 201-290-4385" >{"+1 (201) 290-4385"}</a>
      </span>
      <span className={classnames}>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto: mandipudi@cloud5.ai" >{"mandipudi@cloud5.ai"}</a>
      </span>
    </div>
  )
}

const SocialMedia = () => {
  const styles = `relative overflow-hidden ${icon_sizes.medium} shadow-xl`
  return (
    <div className="relative flex items-center justify-center w-full gap-10 py-10 medium-phone:py-4 large-phone:py-4">
      <span className={styles}>
        {CloudservIcon}
        <Tooltip name="Cloudserv.ai" />
      </span>
      <span className={styles}>
        {Cloud5Icon}
        <Tooltip name="Cloud5.ai" />
      </span>
      <span className={styles}>
        {I5techIcon}
        <Tooltip name="I5Tech" />
      </span>
    </div>
  );
};

export default About;
