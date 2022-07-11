import {Link, useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import axios from "axios";
import {useRecoilState} from "recoil";
import {pickedArticleIdState} from "../utils/recoilStore";


const Article = () => {
    const id = useParams().id
    const navigate = useNavigate()

    const {isLoading, data, error, isFetching} = useQuery("articleQuery", async () => {
        const response = await axios.get(`/api/article/${id}`)
        return response.data
    })

    if(isLoading){
        console.log('loading')
        return(<div>Loading...</div>)
    }

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