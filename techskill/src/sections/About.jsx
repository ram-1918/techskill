import BaseHeader from "../components/BaseHeader";
import { SrinivasImage } from "../components/BaseImages";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import {
    FacebookIcon,
    GmailIcon,
    InstagramIcon,
    LinkedinIcon,
} from "../components/icons";
import Subhead from "../components/Subhead";

function About() {
  return (
    <BaseSlide>
        <BaseHeader text={main_headings.slide10.text} />
        <Subhead text="About me & company" />
        <ContentDiv />
        <SocialMedia />
    </BaseSlide>
  );
}

const ContentDiv = () => {
    return (
        <div className="flex justify-center items-center gap-4">
      <SrinivasImage size="w-40 h-40" />
      <Content />
    </div>
  );
};

const Content = () => {
    const content =
      "As the CEO of Cloudserv.ai specializing in Oracle-based products, I lead a dedicated team of 125 professionals. Our mission is to develop innovative solutions that not only drive business success but also contribute to the development of our country. By leveraging cutting-edge technology, we aim to create products that enhance the quality of life for our community and beyond.";
    return (
        <span className="w-[50%] whitespace-pre-wrap font-light text-lg">
            {content}
        </span>
    )
}

const SocialMedia = () => {
  return (
    <div className="w-full flex justify-center items-center gap-10 py-10">
      {LinkedinIcon}
      {FacebookIcon}
      {InstagramIcon}
      {GmailIcon}
    </div>
  );
};

export default About;
