import BaseHeader from "../components/BaseHeader";
import { APImage } from "../components/BaseImages";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";
import { AwsIcon } from "../components/icons";

const certification_list = [
    {
        id: 1,
        name: "Amazon Web Services",
        icon: AwsIcon,
        certs: [
            'AWS Cloud Practitioner',
            'AWS Solutions Architect Assosiate',
            'AWS Developer',
            'and others'
        ]
    }
]


const Certifications = () => {
    return (
        <BaseSlide>
            <BaseHeader text={main_headings.slide4.text} />
            <div className="w-full flex justify-around items-center gap-2">
                {certification_list.map(item => <Item key={item.id} items={item.certs} icon={item.icon} name={item.name} />)}
            </div>
        </BaseSlide>
    )
};

const Item = ({icon="", items, name}) => {
    return (
        <div className="w-96 h-36 flex justify-start items-start bg-white shadow rounded p-2">
            <div className="w-[25%] h-full bg-red-100 text-[2rem]">{icon}</div>
            <div className="w-[75%] h-full flex flex-col justify-start items-start bg-blue-100">
                <span className="font-semibold text-lg">{name}</span>
                {items.map((item, idx) => <li key={idx} className="text-sm">{item}</li>)}
            </div>
        </div>
    )
}

export default Certifications;