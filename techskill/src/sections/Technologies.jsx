import { useEffect, useRef, useState } from "react";
import { AwsIcon, azureIcon, cppIcon, gcpIcon, GoIcon, JavaIcon, JavascriptIcon, MatlabIcon, NumpyIcon, OracleIcon, PandasIcon, PowerBiIcon, PythonIcon, PytorchIcon, RstudioIcon, SparkIcon, TableauIcon, TensorflowIcon } from "../components/icons";
import BaseHeader from "../components/BaseHeader";
import BaseContentDiv from "../components/BaseContentDiv";
import { main_headings } from "../components/data";
import { colors, heading_font_size } from "../Base";
import BaseSlide from "../components/BaseSlide";
import { useTranslation } from "react-i18next";

const technology_list = {
    "ai/ml": {
        id: 2,
        name: "ai/ml",
        sublist: [
            {
                id: 1, 
                icon: PythonIcon,
                name: "Python"
            },
            {
                id: 2, 
                icon: RstudioIcon,
                name: "R Studio"
            },
            {
                id: 4, 
                icon: SparkIcon,
                name: "Apache Spark"
            },
            {
                id: 6, 
                icon: TensorflowIcon,
                name: "TensorFlow"
            },            
            {
                id: 7, 
                icon: PytorchIcon,
                name: "PyTorch"
            },            
            {
                id: 8, 
                icon: PandasIcon,
                name: "Pandas"
            },            
            {
                id: 9, 
                icon: NumpyIcon,
                name: "NumPy"
            },            
            {
                id: 10, 
                icon: TableauIcon,
                name: "Tableau"
            },            
            {
                id: 11, 
                icon: PowerBiIcon,
                name: "PowerBI"
            }
        ]
        // sublist: [PythonIcon, RstudioIcon, "SQL", "Statistics", "Pandas", "NumPy", "ETL Pipelines", "ML algorithms"]
    },
    "programming languages": {
        id: 3,
        name: "programming languages",
        sublist: [
            {
                id: 1, 
                icon: PythonIcon,
                name: "Python"
            },
            {
                id: 2, 
                icon: RstudioIcon,
                name: "R Studio"
            },            
            {
                id: 3, 
                icon: cppIcon,
                name: "C++"
            },            
            {
                id: 4, 
                icon: GoIcon,
                name: "Go"
            },
            {
                id: 6, 
                icon: JavascriptIcon,
                name: "JavaScript"
            },
            {
                id: 5, 
                icon: JavaIcon,
                name: "Java"
            }
        ]
        // sublist: ["Python, R Studio, C++, Go, Java"]
    },
    "cloud technologies": {
        id: 1,
        name: "cloud technologies",
        sublist: [
            {
                id: 1,
                icon: AwsIcon,
                name: "Amazon Web Services (AWS)"
            },
            {
                id: 2,
                icon: azureIcon,
                name: "Microsoft Azure"
            },
            {
                id: 3,
                icon: gcpIcon,
                name: "Google Cloud Platform(GCP)"
            },
            {
                id: 4,
                icon: OracleIcon,
                name: "Oracle Cloud Infrastructure(OCI)"
            }
        ]
    },
    "devops": {
        id: 4,
        name: "devops",
        sublist: [
            {
                id: 1, 
                icon: PythonIcon,
                name: "Python"
            },
            {
                id: 2, 
                icon: RstudioIcon,
                name: "R Studio"
            },            
            {
                id: 3, 
                icon: cppIcon,
                name: "C++"
            },            
            {
                id: 4, 
                icon: GoIcon,
                name: "Go"
            },
            {
                id: 5, 
                icon: JavaIcon,
                name: "Java"
            },
            {
                id: 6, 
                icon: JavascriptIcon,
                name: "Java Script"
            }
        ]
        // sublist: ["Python, R Studio, C++, Go, Java"]
    },
    "advanced": {
        id: 5,
        name: "advanced",
        sublist: [
            {
                id: 1, 
                icon: PythonIcon,
                name: "Python"
            },
            {
                id: 2, 
                icon: RstudioIcon,
                name: "R Studio"
            },            
            {
                id: 3, 
                icon: cppIcon,
                name: "C++"
            },            
            {
                id: 4, 
                icon: GoIcon,
                name: "Go"
            },
            {
                id: 5, 
                icon: JavaIcon,
                name: "Java"
            },
            {
                id: 6, 
                icon: JavascriptIcon,
                name: "Java Script"
            }
        ]
        // sublist: ["Python, R Studio, C++, Go, Java"]
    }
};

const Technologies = ({keys}) => {
    return (
        <BaseSlide id="technologies">
            <BaseHeader text={main_headings.slide3.text} />
            <BaseContentDiv text="disruptive technologies shaping the coming decades">
                <TechnologiesListDisplay keys={keys} />
            </BaseContentDiv>
        </BaseSlide>
    )
};


const TechnologiesListDisplay = ({keys}) => {
    return (
        <ul className="w-full flex justify-between items-center mobile:flex-col small:flex-col mobile:gap-2 small:gap-2">
            <div className="w-52 h-52 mobile:hidden small:hidden bg-technologies bg-cover bg-center rounded-xl shadow-xl"></div>
            <div className="w-[80%] mobile:w-full small:w-full mobile:px-2 flex justify-around items-start gap-4 mobile:gap-2 small:gap-1">
                {keys.map((key, idx) => <ListItem id={idx} tech={technology_list[key]} />)}
            </div>
        </ul>
    )
};

const ListItem = ({tech:{name, sublist}}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        const handle_resize = () => {
            if(divRef.current) {
                setDivHeight(divRef.current.clientHeight);
            }
        };
        window.addEventListener('resize', handle_resize);
        handle_resize();
        return () => {
            window.removeEventListener('resize', handle_resize);
        }
    }, [divRef]);
    return (
        <div className="flex flex-col items-start justify-start">
            <p style={{fontSize: heading_font_size.subcontent[screen], color:colors.content, borderColor:colors.subcontent}} className="overflow-hidden text-ellipsis font-semibold capitalize border-b border-dotted px-2 mobile:px-0">{t(name)}</p>
            <div className="mobile:w-full h-full flex justify-start mobile:justify-center items-center">
                <span style={{height: divHeight, borderColor:colors.subcontent}} className="mobile:hidden h-full border-l border-dotted"></span>
                <SubListDisplay divRef={divRef} sublist={sublist} />
            </div>
        </div>
    )
};

const SubListDisplay = ({divRef, sublist}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    const { t } = useTranslation();
    return (
        <ul ref={divRef} className="flex flex-col justify-start items-start gap-1">
            {
            sublist.map(
                ({id, icon, name}) => 
                <li key={id}
                style={{fontSize:heading_font_size.subcontent[screen], color:colors.subcontent}}
                className="flex justify-start items-center gap-2 font-medium">
                    <span style={{borderColor:colors.subcontent}} className="mobile:hidden w-7 border-t border-dotted"></span>
                    <span className="w-8 h-8 mobile:w-4 mobile:h-4">{icon}</span>
                    <span>{t(name)}</span>
                </li>
            )}
        </ul>
    )
};

export default Technologies;