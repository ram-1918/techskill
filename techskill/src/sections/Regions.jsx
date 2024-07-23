import APGOV from "../components/APGOV";
import APSSDC from "../components/APSSDC";
import Heading from "../components/Heading";

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
            <div className="w-full flex justify-between items-center">
                <APSSDC />
                <Heading type="h2" text="Regions Likely to Experience Program Advantages" /> 
                <APGOV />
            </div>
            <div className="w-full p-2 flex flex-col justify-center items-center space-y-4">
                <span className="text-xl font-light">Below are the {regions_list.length} proposed regions</span>
                <RegionsListDisplay />
            </div>
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