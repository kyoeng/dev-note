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
    function rotateMenu(posX: number) {
        if (isRotate && initPosX !== null && menuCircle.current !== null) {
            const moveValueX = (posX - initPosX) / 2;

            menuCircleRotateValue += moveValueX;
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
        rotateMenu(e.clientX);
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
        rotateMenu(e.touches[0].clientX);
    }

    // 메뉴 드래그 영역 touchend 함수
    function rotateOffMobile() {
        if (!connectDevice.isMobile) return;
        rotateStateOff();
    }






    return (
        <>        
            <div id="header-container">
                {/* 메뉴 on/off 버튼 */}
                <button id="show-hd-menu-btn" className={"flex-center"} onClick={menuOnOff}>
                    <img src={isMenuOn ? closeIcon : menuIcon} alt="btn" />
                </button>


                {/* 메뉴 */}
                <div id="hd-menu-container" className={isMenuOn ? "" : "off"}>
                    <div id="hd-menu-box" ref={menuCircle}>
                        {
                            routeData.map(({category, text, image}, i: number) => {
                                return (
                                    <Link to={`/${category}`} className={`menu pos${i + 1} flex-center`} key={`menu-btn${i + 1}`} onClick={() => setIsMenuOn(false)}>
                                        <img src={image} alt="menu-img" />
                                        <p>{text}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>


                    <div id="menu-rotate-area" onTouchStart={rotateOnMobile} onTouchMove={rotatingEvtMobile} onTouchEnd={rotateOffMobile}
                    onMouseDown={rotateOnPC} onMouseMove={rotatingEvtPC} onMouseUp={rotateOffPC} onMouseLeave={rotateOffPC}>
                        <div id="menu-rotate-info" className="flex-center">
                            <img src={dragLeftIcon} alt="drag-left" />
                            <p>or</p>
                            <img src={dragRightIcon} alt="drag-left" />
                        </div>

                        <div id="menu-rotate-info-screen"></div>
                    </div>


                    <div id="close-hd-menu-btn-box"></div>
                </div>
            </div>


            {/* 메뉴 배경 */}
            <div id="hd-menu-background" className={isMenuOn ? "" : "off"}></div>
        </>
    )
}




export default Header