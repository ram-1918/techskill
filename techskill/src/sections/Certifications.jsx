import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import { APImage } from "../components/BaseImages";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { AwsIcon, azureIcon, gcpIcon, HerokuIcon, OracleIcon, PowerBiIcon, SalesforceIcon, ServicenowIcon, TableauIcon, TerraformIcon } from "../components/icons";
import Subhead from "../components/Subhead";
import Tooltip from "../components/Tooltip";

const certification_list = [
    {
        id: 1,
        name: "Amazon Web Services",
        icon: AwsIcon,
    },
    {
        id: 2,
        name: "Azure Cloud",
        icon: azureIcon,
    },
    {
        id: 3,
        name: "Google Cloud Platform",
        icon: gcpIcon,
    },
    {
        id: 4,
        name: "Oracle",
        icon: OracleIcon,
    },
    {
        id: 5,
        name: "Service Now",
        icon: ServicenowIcon,
    },
    {
        id: 6,
        name: "Salesforce",
        icon: SalesforceIcon,
    },
    {
        id: 7,
        name: "Tableau",
        icon: TableauIcon,
    },
    {
        id: 8,
        name: "Power BI",
        icon: PowerBiIcon,
    },
    {
        id: 9,
        name: "Terraform",
        icon: TerraformIcon,
    },
    {
        id: 10,
        name: "Heroku",
        icon: HerokuIcon,
    },
]


const Certifications = ({...props}) => {
    return (
        <BaseSlide id="certifications" {...props}>
            <BaseHeader text={main_headings.slide4.text} />
            <BaseContentDiv text="offers training for the following certifications">
                <div className="w-full flex justify-center items-center flex-wrap gap-10">
                    {certification_list.map(item => <Item key={item.id} icon={item.icon} name={item.name} />)}
                </div>
            </BaseContentDiv>
        </BaseSlide>
    )
};

const Item = ({icon, name}) => {
    return (
        <div className="group relative w-28 h-28 mobile:w-12 mobile:h-12 tablet:w-24 tablet:h-24 border border-gray-200 bg-gray-50 shadow-lg rounded-lg flex justify-center items-center">
            <span className="w-20 h-20 mobile:w-10 mobile:h-10 tablet:w-16 tablet:h-16">{icon}</span>
            <Tooltip name={name} />
        </div>
    )
};

export default Certifications;