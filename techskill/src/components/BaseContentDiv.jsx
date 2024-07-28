import { useTranslation } from "react-i18next";
import Subhead from "./Subhead";

// bg-[rgba(0,0,0,0.04)]

const BaseContentDiv = ({children, text=''}) => {
    return (
        <div className="w-full h-full overflow-hidden mobile:pl-0 flex flex-col justify-start items-center gap-4 mobile:gap-1">
            {text && <Subhead text={text} />}
            {children}
        </div>
    )
}

export default BaseContentDiv;