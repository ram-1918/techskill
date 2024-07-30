import { icon_sizes, image_size } from "../Base";
import BaseBGImage from "./BaseBGImage";

export const APImage = ({}) => (
    <div className="
    small-phone:hidden medium-phone:hidden large-phone:hidden small-tablet:hidden
    w-[45%] flex justify-center items-center
    ">
      <div className={`bg-ap ${image_size} bg-center bg-contain bg-no-repeat`}></div>
    </div>
);


export const CBNImage = () => {
  return (
    <BaseBGImage
      image="bg-cbn bg-center"
      size={icon_sizes.xxl}
      // size={`${
      //   screen === "mobile" ? "w-16 h-16" : screen === "tablet" ? "w-24 h-24": "w-32 h-32"
      // } + " " + "border shadow-md"`}
    />
  );
};

export const PKImage = () => {
  // const screen = localStorage.getItem("screen") || "medium-laptop";
  return (
    <BaseBGImage
      image="bg-pk bg-center bg-white border shadow-md"
      size={icon_sizes.xxl}
      // size={`${
      //   screen === "mobile" ? "w-16 h-16" : screen === "tablet" ? "w-24 h-24": "w-32 h-32"
      // } + " " + ""`}
    />
  );
}
export const LokeshImage = ({ size = "w-32 h-32" }) => {
  const screen = localStorage.getItem("screen") || 'medium-laptop';
  return (
    <BaseBGImage
      image="bg-lokesh bg-center border shadow-md"
      size={icon_sizes.xxl}
      // size={`${
      //   screen === "mobile" ? "w-16 h-16" : screen === "tablet" ? "w-24 h-24": size
      // } + " " + "border shadow-md"`}
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
  const screen = localStorage.getItem("screen") || "medium-laptop";
  return (
    <BaseBGImage
      image="bg-apgov"
      size={icon_sizes.xxl}
      // size={
      //   screen === "mobile" || screen === "small" ? "w-16 h-16" : screen === "tablet" ? "w-24 h-24": "w-32 h-32"
      // }
    />
  );
};
export const APSSDC = () => {
  const screen = localStorage.getItem("screen") || "medium-laptop";
  return (
    <BaseBGImage
      image="bg-apssdc"
      size={icon_sizes.xxl}
      />
    );
  };
  // screen === "mobile" || screen === "small" ? "w-16 h-16" : screen === "tablet" ? "w-24 h-24": "w-32 h-32"
