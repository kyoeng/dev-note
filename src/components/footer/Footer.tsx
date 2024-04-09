import imgSourceData from "../../data/imgSourceData";
import "./Footer.scss";




function Footer() {
    return (
		<div id="ft">
			<p id="ft-text" className="flex-center">이 사이트는 공부의 목적으로 제작된 사이트입니다.</p>


			<div id="ft-info-container">
				{/* 이미지 출처 부분 */}
				<div id="img-source-box">
					<p id="img-source-title">이미지 출처</p>

					<div id="img-source">
						{
							imgSourceData.map(({img, link}, i:number) => {
								return (
									<div className="img-source" key={`img-source-${i + 1}`}>
										<img src={img} alt="img" />
										{link}
									</div>
								)
							})
						}
					</div>
				</div>


				<div id="temp-box">
					<p id="temp-title">Temp</p>

					<div id="temp">Temp Area</div>
				</div>
			</div>
		</div>
    )
}

export default Footer