import { useTranslation } from "react-i18next";
import { heading_font_size } from "../Base";

const Tooltip = ({name}) => {
    const {t} = useTranslation();
    return (
        <span class={`
        ${heading_font_size.content}
        absolute z-10 p-1 px-2 text-white opacity-0 
        pointer-events-none bg-slate-900 shadow-orange-50 
        rounded-md -top-5  left-4 w-max transition-opacity 
        group-hover:opacity-100
        `}>
            {t(name)}
        </span>
    )
}

export default Tooltip;