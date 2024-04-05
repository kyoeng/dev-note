import "./SiteInfo.scss";
import infoIcon from "../../assets/images/info-icon.png";




function SiteInfo() {
  return (
    <div id="site-info-container">
      <button id="open-info-btn" className="flex-center">
        <img src={infoIcon} alt="info-btn" />
      </button>


      <div id="info-container">

      </div>
    </div>
  )
}

export default SiteInfo