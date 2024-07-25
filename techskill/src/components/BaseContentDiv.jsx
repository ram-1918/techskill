import Subhead from "./Subhead";

const BaseContentDiv = ({children, text=''}) => {
    return (
        <div className="w-full py-4 px-10 bg-[rgba(0,0,0,0.04)] rounded-xl flex flex-col justify-center items-start gap-4">
            {text && <Subhead text={text} />}
            {children}
        </div>
    )
}

export default BaseContentDiv;