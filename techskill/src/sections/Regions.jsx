import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";

const regions_list = [
    'paderu',
    'pitapuram',
    'nuziveedu',
    'amalapuram',
    'machilipatnam',
    'bapatla',
    'tenali',
    'piduguralla',
    'markapuram',
    'kavali',
    'rajampeta',
    'guduru',
    'alla gadda',
    'pulivendhala',
    'chittor',
    'naidupeta',
    'rajampeta',
    'guduru',
    'alla gadda',
    'pulivendhala',
    'chittor',
    'naidupeta'
];

const Regions = () => {
    return (
        <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col items-end">
            <BaseHeader text="Regions Likely to Experience Program Advantages" />
            <BaseContentDiv text={`Below are the ${regions_list.length} proposed regions`}>
                <div className="w-full p-2 flex flex-col justify-center items-center">
                    <RegionsListDisplay />
                </div>
            </BaseContentDiv>
        </section>
    )
};

const ListItem = ({region, id}) => {
    const list_style = "capitalize text-lg font-medium px-2 list-disc list-inside"
    return <li style={{width: regions_list.length > 20 ? "30%": "33.33%"}} className={list_style} key={id}>{region}</li>
}

const RegionsListDisplay = () => {
    return (
        <ul className="w-[40rem] flex flex-wrap justify-start items-center gap-3 p-2">
            {regions_list.map((region, idx) => <ListItem id={idx} region={region} />)}
        </ul>
    )
}

export default Regions;