import BaseBGImage from "./BaseBGImage"


export const CBNImage = () => <BaseBGImage image="bg-cbn" size="w-32 h-32  border shadow-md" />;
export const LokeshImage = () => <BaseBGImage image="bg-lokesh bg-center" size="w-32 h-32 border shadow-md" />;
export const SrinivasImage = ({size="w-24 h-24"}) => <BaseBGImage image="bg-srinivas" size={`${size} + " " + "border shadow-md"`} />;
export const APGOV = () => <BaseBGImage image="bg-apgov" size="w-32 h-32" />;
export const APSSDC = () => <BaseBGImage image="bg-apssdc" size="w-32 h-32" />;