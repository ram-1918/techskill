import { useTranslation } from "react-i18next";
import { colors, heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";

const regions_list = [
    "addanki",
    "akividu",
    "addateegala",
    "araku valley",
    "badvel",
    "ballikurava",
    "bhogapuram",
    "bobbili",
    "denkada",
    "duggirala",
    "gajuwaka",
    "gudlavalleru",
    "guntur west",
    "kuppam",
    "mangalagiri",
    "pakala",
    "pithapuram",
    "pulivendla",
    "rajanagaram",
    "rajam",
    "tadepalligudem",
    "kakinada (rural)",
    "vijayawada central"
];



const Regions = ({...props}) => {
    return (
        <BaseSlide id="regions" {...props}>
            <BaseHeader text={main_headings.slide2.text} />
            <BaseContentDiv text="">
                <div className="
                w-full h-full flex justify-between items-start space-x-4
                tablet:flex-row laptop:flex-row desktop:flex-row
                mobile:flex-col small:flex-col mobile:space-x-0 small:space-x-0 mobile:gap-4 small:gap-4 
                ">
                    <ImageSpan />
                    <RegionsListDisplay />
                </div>
            </BaseContentDiv>
        </BaseSlide>
    )
};

const ImageSpan = () => {
    return (
        <div className="w-[35%] h-56 mobile:w-full mobile:h-24 mobile:shadow-sm rounded-xl shadow-lg bg-mandals bg-center bg-cover opacity-80"></div>
    )
}

const RegionsListDisplay = () => {
    return (
        <ul className="w-[65%] mobile:w-full grid grid-flow-row grid-cols-3 gap-4 mobile:gap-2 px-4 py-1">
            {regions_list.map((region, idx) => <ListItem id={idx} region={region} />)}
        </ul>
    )
}

const ListItem = ({region, id}) => {
    const list_style = "capitalize font-semibold px-2 list-disc list-inside";
    const screen = localStorage.getItem('screen') || 'laptop';
    const { t } = useTranslation();
    return <li 
    style={
        {
            // width: regions_list.length > 20 ? (screen === 'mobile' ? "29%": "28%"): "33.33%", 
            color: colors.content, 
            fontSize: heading_font_size.subcontent[screen]
        }
    } 
    className={list_style} key={id}>{t(region)}</li>
}

export default Regions;