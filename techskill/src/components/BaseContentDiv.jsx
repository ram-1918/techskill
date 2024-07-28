import { useTranslation } from "react-i18next";
import Subhead from "./Subhead";

// bg-[rgba(0,0,0,0.04)]

const BaseContentDiv = ({children, text=''}) => {
    return (
        <div className="w-full h-full overflow-hidden  desktop:px-10 laptop:px-10 tablet:px-4 mobile:px-2 small:px-1 flex flex-col justify-start items-center gap-4 mobile:gap-1">
            {text && <Subhead text={text} />}
            {children}
        </div>
    )
}

export default BaseContentDiv;