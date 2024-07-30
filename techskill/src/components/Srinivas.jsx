import { SrinivasImage } from "./BaseImages";
import Heading from "./Heading";

const Srinivas = () => {
    return (
        <div className="flex items-center justify-center space-x-4">
            <SrinivasImage />
            <div className="flex flex-col items-start justify-start">
                <Heading type="h4" text="srinivas mandipudi" />
                <Heading type="h5" text="founder & ceo at cloudserv.ai" />
                <Heading type="h5" text="nj, usa" />
            </div>
        </div>
    );
};

export default Srinivas;