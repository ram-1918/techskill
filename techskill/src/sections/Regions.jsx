import { colors, heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import { main_headings } from "../components/data";

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
            <BaseHeader text={main_headings.slide2.text} />
            <BaseContentDiv text="">
                <div className="w-full p-2 flex flex-col justify-center items-center">
                    <RegionsListDisplay />
                </div>
            </BaseContentDiv>
        </section>
    )
};

const RegionsListDisplay = () => {
    return (
        <ul className="w-[40rem] flex flex-wrap justify-start items-center gap-3 p-2">
            {regions_list.map((region, idx) => <ListItem id={idx} region={region} />)}
        </ul>
    )
}

const ListItem = ({region, id}) => {
    const list_style = "capitalize font-medium px-2 list-disc list-inside";
    const screen = localStorage.getItem('screen') || 'laptop';
    return <li style={{width: regions_list.length > 20 ? "30%": "33.33%", color: colors.subcontent, fontSize: heading_font_size.content[screen]}} className={list_style} key={id}>{region}</li>
}

export default Regions;