import BaseBGImage from "./BaseBGImage";

export const APImage = ({}) => (
<div className={`mobile:hidden bg-bg7 w-[33rem] h-[33rem] bg-contain px-2 bg-no-repeat`}></div>
);


export const CBNImage = () => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <BaseBGImage
      image="bg-cbn bg-center"
      size={`${
        screen === "mobile" || screen === "tablet" ? "w-20 h-20" : "w-24 h-24"
      } + " " + "border shadow-md"`}
    />
  );
};
export const LokeshImage = ({ size = "w-24 h-24" }) => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <BaseBGImage
      image="bg-lokesh bg-center"
      size={`${
        screen === "mobile" || screen === "tablet" ? "w-20 h-20" : size
      } + " " + "border shadow-md"`}
    />
  );
};
export const SrinivasImage = ({ size = "w-24 h-24" }) => (
  <BaseBGImage
    image="bg-srinivas"
    size={`${size} + " " + "border shadow-md"`}
  />
);

export const APGOV = () => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <BaseBGImage
      image="bg-apgov"
      size={
        screen === "mobile" || screen === "tablet" ? "w-20 h-20" : "w-32 h-32"
      }
    />
  );
};
export const APSSDC = () => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <BaseBGImage
      image="bg-apssdc"
      size={
        screen === "mobile" || screen === "tablet" ? "w-20 h-20" : "w-32 h-32"
      }
    />
  );
};
