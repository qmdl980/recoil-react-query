import Header from "./Header/Header"
import "../App.css"
import Footer from "./Footer/Footer";

const Layout= (props) => {
    return (
        <div className="wrap">
            <Header/>
            <section id="container">
                {props.children}
            </section>
            <Footer/>
        </div>
    )
}

export default Layout