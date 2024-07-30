import { APGOV, APSSDC } from "./BaseImages";
import Heading from "./Heading";

const BaseHeader = ({ text }) => {
  return (
    <>
      {/* <SmallScreenHeader text={text} /> */}
      <BigScreenHeader text={text} />
    </>
  );
};

const BigScreenHeader = ({ text }) => {
  return (
    <div
      className="flex items-center justify-between w-full tablet:flex laptop:flex desktop:flex"
    >
      <APSSDC />
      <Heading type="main" text={text} />
      <APGOV />
    </div>
  );
};

const SmallScreenHeader = ({ text }) => {
  return (
    <div
      className="flex flex-col items-center justify-start w-full tablet:hidden laptop:hidden desktop:hidden"
    >
      <div
        className="flex items-center justify-between w-full "
      >
        <APSSDC />
        <APGOV />
      </div>
      <Heading type="main" text={text} />
    </div>
  );
};

export default BaseHeader;
