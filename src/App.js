import './App.css';
import axios from "axios";
import ArticleList from "./components/ArticleList";
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";
import {useQuery} from "react-query";
import {useSetRecoilState} from "recoil";
import {articleListState, categoryListState} from "./utils/recoilStore";


function App() {
    const setArticleList = useSetRecoilState(articleListState)
    const setCategoryList = useSetRecoilState(categoryListState)

    const {isLoading, data, error, isFetching} = useQuery("articleListQuery", async () => {
        const response = await axios.get('/api/articles')
        setArticleList(response.data)
        return response.data
    })

    useQuery("categoryQuery", async () => {
        const response = await axios.get('api/category')
        setCategoryList(response.data)
        return response.data
    })

    if(isLoading){
        return(<div>Loading...</div>)
    }

    return (
        <Layout>
            <Routes>
                <Route path={"/"} element={<ArticleList/>}/>
                <Route path="/:id" element={<Article/>}/>
                <Route path="/edit" element={<AddArticle/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
