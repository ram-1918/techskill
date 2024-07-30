import { icon_sizes } from "../Base";
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
                <div className="flex flex-wrap items-center justify-center w-full gap-12">
                    {certification_list.map(item => <Item key={item.id} icon={item.icon} name={item.name} />)}
                </div>
            </BaseContentDiv>
        </BaseSlide>
    )
};

const Item = ({icon, name}) => {
    return (
        <div className="relative flex items-center justify-center p-4 border border-gray-200 rounded-lg shadow-lg group bg-gray-50">
            <span className={icon_sizes.xl}>{icon}</span>
            <Tooltip name={name} />
        </div>
    )
};

export default Certifications;