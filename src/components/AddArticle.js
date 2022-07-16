import {Button, Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {articleListState, categoryListState} from "../utils/recoilStore";

const AddArticle = () => {
    const [validated, setValidated] = useState(false)
    const categoryList = useRecoilValue(categoryListState)
    const [articleList, setArticleList] = useRecoilState(articleListState)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        navigate('/')
    }

    return(
        <div className="content-wrap">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="categoryInput">
                    <Form.Select size="sm">
                        <option key = "blankChoice" hidden value>카테고리를 선택해주세요</option>
                        {categoryList.map((item) => <option value={item.category} key={item.id}>{item.category}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">카테고리를 정해주세요</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="titleInput" >
                    <Form.Control required type="text" size = "lg" placeholder="제목 입력" className={"add-article-title"}/>
                    <Form.Control.Feedback type="invalid">제목을 입력하세요</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="contentText" className={"add-article-text"}>
                    <Form.Control required as="textarea" rows={20}/>
                    <Form.Control.Feedback>looks good</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">내용을 입력하세요</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className={"add-article-button"}>
                    저장
                </Button>
            </Form>
        </div>
    )


}
export default AddArticle