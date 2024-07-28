import { useTranslation } from "react-i18next";

const Tooltip = ({name}) => {
    const {t} = useTranslation();
    return (
        <span class="pointer-events-none bg-slate-900 px-2 p-1 text-white shadow-orange-50 z-10 rounded-md absolute -top-5  left-4 w-max opacity-0 transition-opacity group-hover:opacity-100">
            {t(name)}
        </span>
    )
}

export default Tooltip;