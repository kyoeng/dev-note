import homeIcon from "../assets/images/home-icon.png";
import jsIcon from "../assets/images/js-icon.png";
import tsIcon from "../assets/images/ts-icon.png";
import pyIcon from "../assets/images/python-icon.png";
import javaIcon from "../assets/images/java-icon.png";
import unityIcon from "../assets/images/unity-icon.png";
import dbIcon from "../assets/images/db-icon.png";
import etcIcon from "../assets/images/etc-icon.png";



const routeData: {category: string, text: string, image: string}[] = [
    {
        category: "",
        text: "Home",
        image: homeIcon
    },
    {
        category: "js",
        text: "JavaScript",
        image: jsIcon
    },
    {
        category: "ts",
        text: "TypeScript",
        image: tsIcon
    },
    {
        category: "py",
        text: "Python",
        image: pyIcon
    },
    {
        category: "etc",
        text: "etc",
        image: etcIcon
    },
    {
        category: "java",
        text: "Java",
        image: javaIcon
    },
    {
        category: "uni",
        text: "Unity",
        image: unityIcon
    },
    {
        category: "db",
        text: "DataBase",
        image: dbIcon
    },
];



export default routeData;