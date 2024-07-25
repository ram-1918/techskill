import Subhead from "./Subhead";

// bg-[rgba(0,0,0,0.04)]

const BaseContentDiv = ({children, text=''}) => {
    return (
        <div className="w-full py-8 pl-24 rounded-xl flex flex-col justify-center items-start gap-4">
            {text && <Subhead text={text} />}
            {children}
        </div>
    )
}

export default BaseContentDiv;