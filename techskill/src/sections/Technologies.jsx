import { useEffect, useRef, useState } from "react";
import { AwsIcon, azureIcon, cppIcon, gcpIcon, GoIcon, JavaIcon, JavascriptIcon, MatlabIcon, OracleIcon, PowerBiIcon, PythonIcon, RstudioIcon, SparkIcon, TableauIcon } from "../components/icons";
import BaseHeader from "../components/BaseHeader";
import BaseContentDiv from "../components/BaseContentDiv";
import { main_headings } from "../components/data";
import { heading_font_size } from "../Base";
import BaseSlide from "../components/BaseSlide";

const technology_list = {
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
                id: 5, 
                icon: MatlabIcon,
                name: "Matlab"
            },
            {
                id: 6, 
                icon: TableauIcon,
                name: "Tableau"
            },            
            {
                id: 7, 
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
        <BaseSlide>
            <BaseHeader text={main_headings.slide3.text} />
            <BaseContentDiv text="Disruptive Technologies Shaping the Coming Decades">
                <TechnologiesListDisplay keys={keys} />
            </BaseContentDiv>
        </BaseSlide>
    )
};


const TechnologiesListDisplay = ({keys}) => {
    return (
        <ul className="w-full flex justify-evenly items-start gap-3 p-2">
            {keys.map((key, idx) => <ListItem id={idx} tech={technology_list[key]} />)}
        </ul>
    )
};

const ListItem = ({tech:{name, sublist}}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);

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
            <span style={{fontSize: heading_font_size.content[screen]}} className="font-semibold uppercase leading-6 tracking-wide">{name}</span>
            <div className="h-full flex justify-start items-center">
                <span style={{height: divHeight}} className="h-full w-0.5 bg-sky-700 border border-dotted"></span>
                <SubListDisplay divRef={divRef} sublist={sublist} />
            </div>
        </div>
    )
};

const SubListDisplay = ({divRef, sublist}) => {
    const screen = localStorage.getItem('screen') || 'laptop';
    return (
        <ul ref={divRef} className="flex flex-col justify-start items-start gap-1">
            {
            sublist.map(
                ({id, icon, name}) => 
                <li key={id}
                style={{fontSize:heading_font_size.subcontent[screen]}}
                className="flex justify-start items-center gap-2 font-medium">
                    <span className="h-0.5 w-10 bg-sky-700 border border-dotted"></span>
                    <span className="w-8 h-8">{icon}</span>
                    <span>{name}</span>
                </li>
            )}
        </ul>
    )
};

export default Technologies;