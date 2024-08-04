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
    InstagramIcon,
    LinkedinIcon,
    RubikIcon,
} from "../components/icons";
import Subhead from "../components/Subhead";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import BaseContentDiv from "../components/BaseContentDiv";
import { heading_font_size, icon_sizes } from "../Base";

function About() {
  return (
    <BaseSlide>
        <BaseHeader text={main_headings.slide10.text} />
        <BaseContentDiv>
          <ContentDiv />
        </BaseContentDiv>
    </BaseSlide>
  );
}

const ContentDiv = () => {
    return (
      <div className={`${heading_font_size.content}`}>
        <div className="flex items-center justify-center gap-10 small-tablet:flex-col large-phone:flex-col">
          <SrinivasImage size="w-48 h-48" />
          <Content />
        </div>
        <SocialMedia />
        <Details />
      </div>
  );
};

const Content = () => {
    const content1 =
      "As the CEO of Cloudserv.ai specializing in Oracle-based products, I lead a dedicated team of 125 professionals. Our mission is to develop innovative solutions that not only drive business success but also contribute to the development of our country. By leveraging cutting-edge technology, we aim to create products that enhance the quality of life for our community and beyond.";
    const content2 = "I am a seasoned professional with 20 years of experience as a Cloud Solutions Architect, specializing in designing, implementing, and managing cloud-based solutions. In addition to my technical expertise, I have been successfully maintaining staffing and recruiting companies, showcasing strong leadership skills in ensuring efficient operations and successful talent acquisition. My extensive background in cloud architecture, team management, and strategic planning makes me a valuable asset in both technology and human resources domains."
    return (
        <span className="w-[50%] whitespace-pre-wrap font-medium small-tablet:w-full large-phone:w-full">
            {content2}
        </span>
    )
}

// mandipudi@cloud5.ai
// +1 (201) 290-4385
// Srinivas Mandipudi

const Details = () => {
  const classnames = "space-x-2 flex justify-center items-center font-medium";
  return (
    <div className="flex items-center justify-center w-full py-5 space-x-8 small-tablet:flex-wrap large-phone:flex-wrap">
      <span className={classnames}>
        <FontAwesomeIcon icon={faLocationDot} />
        <span>Edison, NJ, USA</span>
      </span>
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
  const styles = `overflow-hidden ${icon_sizes.medium} rounded-lg`
  return (
    <div className="flex items-center justify-center w-full gap-10 py-10">
      <span className={styles}>{Cloud5Icon}</span>
      <span className={styles}>{CloudservIcon}</span>
      <span className={styles}>{RubikIcon}</span>
    </div>
  );
};

export default About;
