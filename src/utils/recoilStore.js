import {atom, selector} from "recoil";
import fetchData from "../hooks/fetchData";

export const articleListState = atom({
    key:'articleListState',
    default:[]
})

export const pickedArticleIdState = atom({
    key:'pickedArticleIdState',
    default: 0
})

export const articleListQuery = selector({
    key:'articleList',
    get: async ({get}) => {
        const response = await fetchData({id: get(pickedArticleIdState)})
        return response.data
    }
})

export const articleState = atom({
    key:'articleState',
    default:{}
})