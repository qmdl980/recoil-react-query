import {Link} from 'react-router-dom'
import "./Header.css"

const Header = () => {


    return (
        <div className="header">
            <div className="header-inner">
                <h1 className="header-title">
                    <Link to={"/"}>블로그</Link>
                </h1>
                <h2 className="header-title">
                    <Link to={"/edit"}>글쓰기</Link>
                </h2>

            </div>
        </div>
)
}

export default Header