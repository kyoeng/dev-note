import "./MainCategoryPage.scss";
import { useParams } from "react-router-dom"

function MainCategoryPage() {
    const category = useParams().category;


    return (
        <div id="main-category-container">
            <p>
                category : {category}
            </p>
        </div>
    )
}

export default MainCategoryPage