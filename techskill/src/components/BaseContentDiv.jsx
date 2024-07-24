import Subhead from "./Subhead";

const BaseContentDiv = ({children, text}) => {
    return (
        <div className="w-full p-2 flex flex-col justify-center items-start gap-4">
            {text && <Subhead text={text} />}
            {children}
        </div>
    )
}

export default BaseContentDiv;