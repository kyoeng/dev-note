import "./Header.scss";
import menuIcon from "../../assets/images/menu-icon.png";
import closeIcon from "../../assets/images/close-icon.png";
import dragLeftIcon from "../../assets/images/drag-left-icon.png";
import dragRightIcon from "../../assets/images/drag-right-icon.png";
import routeData from "../../data/routeData";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";







function Header() {
    const connectDevice = useSelector((state: RootState) => state.connectDevice);       // 접속 기기 확인용 store

    const [isMenuOn, setIsMenuOn] = useState(false);        // 메뉴 on/off 관련 flag 값
    const menuCircle = useRef<HTMLDivElement>(null);        // 메뉴 태그 참조

    let isRotate: boolean = false;              // 회전 가능 여부 flag
    let initPosX: number | null = null;         // 마우스 다운 시 마우스 위치
    let menuCircleRotateValue: number = 0;      // 메뉴의 회전 값



    /**
     * 메뉴 on/off 함수
     */
    function menuOnOff() {
        setIsMenuOn(!isMenuOn);
    }


    /**
     * 메뉴 클릭 이벤트 
     */
    function menuClickEvt() {
        setIsMenuOn(false);
    }


    /**
     * 회전 가능 상태로 변경
     * @param posX 마우스 or 터치가 시작된 x위치
     */
    function rotateStateOn(posX: number) {
        isRotate = true;
        initPosX = posX;
    }

    /**
     * 회전 불가 상태로 변경
     */
    function rotateStateOff() {
        isRotate = false;
        initPosX = null;
    }

    /**
     * 메뉴 회전 함수
     * @param posX 마우스 or 터치가 되고 있는 x위치
     */
    function rotate(posX: number) {
        if (isRotate && initPosX !== null && menuCircle.current !== null) {
            const moveValueX = connectDevice.isMobile ? (posX - initPosX) / 2 : (posX - initPosX) / 4;

            menuCircleRotateValue += -moveValueX;
            menuCircle.current.style.transform = `rotate(${menuCircleRotateValue}deg)`;

            initPosX = posX;
        }
    }



    // 메뉴 드래그 영역 mousedown 함수
    function rotateOnPC(e: React.MouseEvent<HTMLDivElement>) {
        if (connectDevice.isMobile) return;
        rotateStateOn(e.clientX);
    }
    
    // 메뉴 드래그 영역 mousemove 함수
    function rotatingEvtPC(e: React.MouseEvent<HTMLDivElement>) {
        if (connectDevice.isMobile) return;
        rotate(e.clientX);
    }
    
    // 메뉴 드래그 영역 mouseleave, mouseup 함수
    function rotateOffPC() {
        if (connectDevice.isMobile) return;
        rotateStateOff();
    }

    // 메뉴 드래그 영역 touchstart 함수
    function rotateOnMobile(e: React.TouchEvent<HTMLDivElement>) {
        if (!connectDevice.isMobile) return;
        rotateStateOn(e.touches[0].clientX);
    }
    
    // 메뉴 드래그 영역 touchmove 함수
    function rotatingEvtMobile(e: React.TouchEvent<HTMLDivElement>) {
        if (!connectDevice.isMobile) return;
        rotate(e.touches[0].clientX);
    }

    // 메뉴 드래그 영역 touchend 함수
    function rotateOffMobile() {
        if (!connectDevice.isMobile) return;
        rotateStateOff();
    }






    return (
        <div id="hd">
            {/* 메뉴 on/off 버튼 */}
            <button id="hd-btn" className="flex-center" onClick={menuOnOff}>
                <img src={isMenuOn ? closeIcon : menuIcon} alt="btn" style={isMenuOn ? {scale: "0.9"} : {}} />
            </button>


            {/* 메뉴 */}
            <div id="hd-menu-container" style={isMenuOn ? {visibility: "visible", opacity: 1} : {visibility: "hidden", opacity: 0}}
            onMouseDown={rotateOnPC} onMouseMove={rotatingEvtPC} onMouseLeave={rotateOffPC} onMouseUp={rotateOffPC}
            onTouchStart={rotateOnMobile} onTouchMove={rotatingEvtMobile} onTouchEnd={rotateOffMobile}>
                {/* 메뉴 회전 안내 부분 */}
                <div id="rotate-menu-info">
                    <p id="info-text">드래그로 메뉴 회전</p>

                    <img src={dragLeftIcon} alt="drag-info-img" />
                    <p className="flex-center">or</p>
                    <img src={dragRightIcon} alt="drag-info-img" />
                </div>


                {/* 메뉴 부분 */}
                <div id="hd-menu" className={isMenuOn ? "menu-on" : "menu-off"}
                onMouseDown={(e) => e.stopPropagation()} onMouseLeave={(e) => e.stopPropagation()} onMouseMove={(e) => { e.stopPropagation(); rotateStateOff();} } onMouseUp={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()} onTouchEnd={(e) => e.stopPropagation()}>
                    <div id="inner-circle"></div>

                    <div id="menu-circle" ref={menuCircle}>
                        {
                            routeData.map(({category, text, image}, i: number) => {
                                return (
                                    <Link to={`/dev-note/${category}`} key={`menu-${i + 1}`} className={`flex-center menu pos${i + 1}`} onClick={menuClickEvt}>
                                        <img src={image} alt="img" />
                                        <p>{text}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Header