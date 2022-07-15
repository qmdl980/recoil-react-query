import { Card } from 'react-bootstrap'
import img from "../../img/cover_img.png"
import "./PostCard.css"
import {useNavigate} from "react-router-dom";


const PostCard = (props) => {
    const navigate = useNavigate()

    const onClick = (e) => {
        navigate(
            `/${props.id}`
        )
    }

    return (
        <Card bg='dark' className={"post-card"} onClick={onClick}>
            <Card.Img variant="top" src={img} className={"post-card-img"}/>
            <Card.Body>
                <Card.Title className="card-title">{props.title}</Card.Title>
                <Card.Text className="card-date">{props.date.substring(0,10)}</Card.Text>
                <Card.Text className="card-text">{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default PostCard