import {articleListState, pickedArticleIdState} from "../utils/recoilStore";
import {useRecoilState} from "recoil";
import {useQuery} from "react-query";
import fetchData from "../hooks/fetchData";
import axios from "axios";
import PostCard from "./PostCard/PostCard";
import {useEffect} from "react";

const ArticleList = () => {

    const {isLoading, data, error, isFetching} = useQuery("articleListQuery", async () => {
        const response = await axios.get('/api/articles')
        return response.data
    })
    if(isLoading){
        return(<div>Loading...</div>)
    }

    return(
        <div className={"content-wrap"}>
            <div className={"board-wrap"}>
                {data.map((item) => <PostCard key={item.id} title={item.title} text={item.text} date={item.timestamp} id={item.id}/>)}
            </div>
        </div>
    )
}
export default ArticleList