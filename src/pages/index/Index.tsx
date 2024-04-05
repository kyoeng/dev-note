import "./Index.scss";
import logoIcon from "../../assets/images/logo-icon.png";
import routeData from "../../data/routeData";
import { Link } from "react-router-dom";
import imgSourceData from "../../data/imgSourceData";




function Index() {

    return (
        <div id="index-container">
            {/* 타이틀 부분 */}
            <div id="index-title">
                <img id="logo-img" src={logoIcon} alt="logo" />

                <p id="title-text-box">
                    <span>Notes for studying development</span>
                    <span>#개발 #공부</span>
                </p>
            </div>


            {/* 메뉴 부분 */}
            <div id="note-list-box">
                <p id="note-list-text">- NOTE LIST -</p>

                <div id="note-list">
                    {
                        routeData.map(({category, text, image}, i: number) => {
                            if (i > 0) {
                                return (
                                    <Link to={`/${category}`} className="flex-center note-menu" style={category === "etc" ? {order: 1} : {}} key={`menu-btn${i + 1}`}>
                                        <img src={image} alt="menu-img" />
                                        <p>{text}</p>
                                    </Link>
                                )
                            }
                        })
                    }
                </div>
            </div>


            <div id="info-box">
                {/* 이미지 출처 부분 */}
                <div id="img-source-box">
                    <p id="img-source-text">이미지 출저</p>

                    <div id="img-source-list">
                        {
                            imgSourceData.map(({img, link}, i: number) => {
                                return (
                                    <div className="img-source" key={`img-source-${i}`}>
                                        <img src={img} alt="img" />
                                        {link}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* 정보 부분 */}
                <div id="my-info-box">
                    <p id="my-info-text">Temp Text</p>

                    <div id="my-info-list">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Index