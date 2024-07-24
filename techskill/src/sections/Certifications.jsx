import BaseHeader from "../components/BaseHeader";
import { APImage } from "../components/BaseImages";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { AwsIcon, azureIcon, gcpIcon, HerokuIcon, OracleIcon, PowerBiIcon, SalesforceIcon, ServicenowIcon, TableauIcon, TerraformIcon } from "../components/icons";
import Subhead from "../components/Subhead";

const certification_list = [
    {
        id: 1,
        icon: AwsIcon,
    },
    {
        id: 2,
        icon: azureIcon,
    },
    {
        id: 3,
        icon: gcpIcon,
    },
    {
        id: 4,
        icon: OracleIcon,
    },
    {
        id: 5,
        icon: ServicenowIcon,
    },
    {
        id: 6,
        icon: SalesforceIcon,
    },
    {
        id: 7,
        icon: TableauIcon,
    },
    {
        id: 8,
        icon: PowerBiIcon,
    },
    {
        id: 9,
        icon: TerraformIcon,
    },
    {
        id: 10,
        icon: HerokuIcon,
    },
]


const Certifications = () => {
    return (
        <BaseSlide>
            <BaseHeader text={main_headings.slide4.text} />
            <Subhead text="Offers training for the following certifications" />
            <div className="w-full flex justify-center items-center flex-wrap gap-4">
                {certification_list.map(item => <Item key={item.id} icon={item.icon} />)}
            </div>
        </BaseSlide>
    )
};

const Item = ({icon}) => {
    return (
        <div className="w-28 h-28 border border-gray-200 bg-gray-50 shadow-lg rounded-full flex justify-center items-center">
            <span className="w-20 h-20">{icon}</span>
        </div>
    )
}

export default Certifications;