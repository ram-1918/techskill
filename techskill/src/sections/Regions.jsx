import { colors, heading_font_size } from "../Base";
import BaseContentDiv from "../components/BaseContentDiv";
import BaseHeader from "../components/BaseHeader";
import BaseSlide from "../components/BaseSlide";
import { main_headings } from "../components/data";

const regions_list = [
    "Addanki",
    "Akividu",
    "Addateegala",
    "Araku Valley",
    "Badvel",
    "Ballikurava",
    "Bhogapuram",
    "Bobbili",
    "Denkada",
    "Duggirala",
    "Gajuwaka",
    "Gudlavalleru",
    "Guntur West",
    "Kuppam",
    "Mangalagiri",
    "Pakala",
    "Pithapuram",
    "Pulivendla",
    "Rajanagaram",
    "Rajam",
    "tadepalligudem",
    "Kakinada",
    "Vijayawada"
  ];



const Regions = () => {
    return (
        <BaseSlide>
            <BaseHeader text={main_headings.slide2.text} />
            <BaseContentDiv text="List of Mandals">
                <div className="w-full flex justify-between items-center space-x-4">
                    <ImageSpan />
                    <RegionsListDisplay />
                </div>
            </BaseContentDiv>
        </BaseSlide>
    )
};

const ImageSpan = () => {
    return (
        <div className="w-[30%] h-56 rounded-lg shadow-lg bg-mandals bg-center bg-cover"></div>
    )
}

const RegionsListDisplay = () => {
    return (
        <ul className="w-[70%] mobile:w-full flex flex-wrap justify-start items-center gap-y-4 gap-x-2">
            {regions_list.map((region, idx) => <ListItem id={idx} region={region} />)}
        </ul>
    )
}

const ListItem = ({region, id}) => {
    const list_style = "capitalize font-medium px-2 list-disc list-inside";
    const screen = localStorage.getItem('screen') || 'laptop';
    return <li style={{width: regions_list.length > 20 ? (screen === 'mobile' ? "29%": "28%"): "33.33%", color: colors.subcontent, fontSize: heading_font_size.subcontent[screen]}} className={list_style} key={id}>{region}</li>
}

export default Regions;