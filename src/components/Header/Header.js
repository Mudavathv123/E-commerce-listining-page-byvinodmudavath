
import NavBar from "../NavBar/NavBar"
import '../../App.css'
import { Col } from "react-bootstrap"

const Header = () => {
    
    return (
        <Col className="sticky-top">
            <div className="header-label d-flex justify-content-end">
                    <p className="text-center">Free Shipping on orders above 999/-</p>
                    <p className="">Call us on: +91 75XXXXXXX8</p>
            </div>
            <div>
                <div>
                    <NavBar/>
                </div>

            </div>
        </Col>
    )
}

export default Header