import BaseBGImage from "./BaseBGImage";

export const APImage = ({}) => (
    <div className="w-[45%] flex justify-center items-center">
      <div className={`mobile:hidden bg-bg9 w-[33rem] h-[25rem] bg-contain px-2 bg-no-repeat`}></div>
    </div>
);


export const CBNImage = () => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <BaseBGImage
      image="bg-cbn bg-center"
      size={`${
        screen === "mobile" || screen === "tablet" ? "w-20 h-20" : "w-32 h-32"
      } + " " + "border shadow-md"`}
    />
  );
};
export const LokeshImage = ({ size = "w-32 h-32" }) => {
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
        screen === "mobile" || screen === "tablet" ? "w-20 h-20" : "w-24 h-24"
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
        screen === "mobile" || screen === "tablet" ? "w-20 h-20" : "w-28 h-28"
      }
    />
  );
};
