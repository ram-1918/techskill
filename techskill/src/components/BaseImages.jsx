import BaseBGImage from "./BaseBGImage";

export const APImage = ({}) => (
    <div className="mobile:hidden w-[45%] flex justify-center items-center">
      <div className={`mobile:hidden bg-ap w-[33rem] h-[24rem] bg-center bg-contain bg-no-repeat`}></div>
    </div>
);


export const CBNImage = () => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <BaseBGImage
      image="bg-cbn bg-center"
      size={`${
        screen === "mobile" ? "w-16 h-16" : screen === "tablet" ? "w-24 h-24": "w-32 h-32"
      } + " " + "border shadow-md"`}
    />
  );
};

export const PKImage = () => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <BaseBGImage
      image="bg-pk bg-center bg-white"
      size={`${
        screen === "mobile" ? "w-16 h-16" : screen === "tablet" ? "w-24 h-24": "w-32 h-32"
      } + " " + "border shadow-md"`}
    />
  );
}
export const LokeshImage = ({ size = "w-32 h-32" }) => {
  const screen = localStorage.getItem("screen") || "laptop";
  return (
    <BaseBGImage
      image="bg-lokesh bg-center"
      size={`${
        screen === "mobile" ? "w-16 h-16" : screen === "tablet" ? "w-24 h-24": size
      } + " " + "border shadow-md"`}
    />
  );
};
export const SrinivasImage = ({ size = "w-32 h-32" }) => (
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
        screen === "mobile" || screen === "small" ? "w-16 h-16" : screen === "tablet" ? "w-24 h-24": "w-32 h-32"
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
        screen === "mobile" || screen === "small" ? "w-16 h-16" : screen === "tablet" ? "w-24 h-24": "w-32 h-32"
      }
    />
  );
};
