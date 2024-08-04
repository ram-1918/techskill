import Subhead from "./Subhead";


const BaseContentDiv = ({children, text=''}) => {
    return (
        <div className="flex flex-col items-center justify-start w-full h-full gap-4 overflow-hidden ">
            {text && <Subhead text={text} />}
            <div className="flex flex-col items-center justify-around w-full h-full">
                {children}
                <div className="w-full h-2"></div>
            </div>
        </div>
    )
}

export default BaseContentDiv;