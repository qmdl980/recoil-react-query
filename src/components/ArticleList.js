import {articleListState} from "../utils/recoilStore";
import {useRecoilState, useRecoilValue} from "recoil";
import PostCard from "./PostCard/PostCard";

const ArticleList = () => {
    const articleList = useRecoilValue(articleListState)

    return(
        <div className={"content-wrap"}>
            <div className={"board-wrap"}>
                {articleList.map((item) => <PostCard key={item.id} title={item.title} text={item.text} date={item.timestamp} id={item.id}/>)}
            </div>
        </div>
    )
}
export default ArticleList