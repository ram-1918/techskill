import Subhead from "./Subhead";


const BaseContentDiv = ({children, text=''}) => {
    return (
        <div className="flex flex-col items-center justify-start w-full h-full gap-6 overflow-hidden">
            {text && <Subhead text={text} />}
            <div className="flex flex-col items-center justify-center w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default BaseContentDiv;