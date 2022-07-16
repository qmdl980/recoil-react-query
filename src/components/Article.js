import {useParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {articleListState} from "../utils/recoilStore";


const Article = () => {
    const id = parseInt(useParams().id)
    const articleList = useRecoilValue(articleListState)
    const data = articleList.find((item) => item.id === id)

    return (
        <div className="article-wrap">
            <center>
                <div className="article-content">
                    <div className="board-title">
                        <div className="article-category-form">
                            카테고리: {data.category}
                        </div>
                        <h1 className="article-title-form">
                            {data.title}
                        </h1>
                        <ul style={{padding: "0 0", margin: "0 0"}}>
                            <span className="article-date-form">
                                {data.timestamp.substring(0,10)}
                            </span>
                        </ul>
                    </div>
                    <div className="board-text">{data.text}</div>
                </div>
            </center>
        </div>
    )
}
export default Article