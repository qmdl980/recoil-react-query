import './App.css';
import {RecoilRoot} from "recoil";
import axios from "axios";
import ArticleList from "./components/ArticleList";
import {QueryClientProvider, QueryClient} from "react-query";
import Layout from "./components/Layout";
import {Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";

const queryClient = new QueryClient()

function App() {
    return (
        <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Layout>
                        <Routes>
                            <Route path={"/"} element={<ArticleList/>}/>
                            <Route path="/:id" element={<Article/>}/>
                            <Route path="/edit" element={<AddArticle/>}/>
                        </Routes>
                    </Layout>
                </QueryClientProvider>

        </BrowserRouter>
    );
}

export default App;
