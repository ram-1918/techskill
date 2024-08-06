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
                <div className="flex flex-col items-center justify-around w-full h-full px-2">
                    <div className="flex flex-wrap items-center justify-around w-full gap-x-10 h-fit gap-y-8 medium-phone:gap-y-1 large-phone:gap-y-1">
                        {certification_list.map(item => <Item key={item.id} icon={item.icon} name={item.name} />)}
                    </div>
                    <div className="w-full h-2"></div>
                </div>
            </BaseContentDiv>
        </BaseSlide>
    )
};

const Item = ({icon, name}) => {
    return (
        <div className={`relative flex items-center justify-center p-1 border border-gray-200 rounded-lg shadow-lg h-fit group bg-gray-50`}>
            <span className={icon_sizes.medium}>{icon}</span>
            <Tooltip name={name} />
        </div>
    )
};

export default Certifications;