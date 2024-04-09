import "./Index.scss";
import logoIcon from "../../assets/images/logo-icon.png";
import routeData from "../../data/routeData";
import { Link } from "react-router-dom";



function Index() {

    return (
        <div id="index">
            {/* 타이틀 부분 */}
            <div id="index-title">
                <img src={logoIcon} alt="logo-icon" />
                <p>
                    <span>Notes for Development</span>
                    <span>#개발 #소프트웨어 #공부</span>
                </p>
            </div>


            {/* 메인 카테고리 부분 */}
            <div id="category-list-container">
                <p id="category-title" className="flex-center">Category List</p>

                <div id="category-list">
                    {   
                        routeData.map(({category, text, image}, i: number) => {
                            if (text !== "Home") {
                                return (
                                    <Link to={`/dev-note/${category}`} key={`menu-${i + 1}`} className={`category`} style={text === "etc" ? {order: 1} : {}}>
                                        <img src={image} alt="img" />
                                        <p>{text}</p>
                                    </Link>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}



export default Index