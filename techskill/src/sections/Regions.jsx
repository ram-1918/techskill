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
    "Kakinada (Rural)",
    "Kuppam",
    "Mangalagiri",
    "Pakala",
    "Pithapuram",
    "Pulivendla",
    "Rajanagaram",
    "Rajam",
    "Vijayawada Central",
    "tadepalligudem"
  ];

const Regions = () => {
    return (
        <BaseSlide>
            <BaseHeader text={main_headings.slide2.text} />
            <BaseContentDiv text="List of Mandals">
                <div className="w-full flex flex-col justify-center items-center">
                    <RegionsListDisplay />
                </div>
            </BaseContentDiv>
        </BaseSlide>
    )
};

const RegionsListDisplay = () => {
    return (
        <ul className="w-[90%] mobile:w-full flex flex-wrap justify-start items-center gap-4 p-2">
            {regions_list.map((region, idx) => <ListItem id={idx} region={region} />)}
        </ul>
    )
}

const ListItem = ({region, id}) => {
    const list_style = "capitalize font-medium px-2 list-disc list-inside";
    const screen = localStorage.getItem('screen') || 'laptop';
    return <li style={{width: regions_list.length > 20 ? (screen === 'mobile' ? "29%": "20%"): "35.33%", color: colors.subcontent, fontSize: heading_font_size.subcontent[screen]}} className={list_style} key={id}>{region}</li>
}

export default Regions;