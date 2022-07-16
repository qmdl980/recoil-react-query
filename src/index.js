import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RecoilRoot} from "recoil";
import {QueryClientProvider, QueryClient} from "react-query";
import {BrowserRouter} from "react-router-dom";
const queryClient = new QueryClient()

ReactDOM.render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </RecoilRoot>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
