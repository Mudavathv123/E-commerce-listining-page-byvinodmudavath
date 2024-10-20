import { Card, Col } from "react-bootstrap"
import { FaMinus, FaPlus } from "react-icons/fa6"
import './../../App.css'

const CartCard = ({ cartProduct }) => {

    return (
        <Col key={cartProduct.uniqueId} lg = {12} className="gap-2 flex-wrap">
            <Card className="mt-2">
                <Card.Body className="d-flex align-items-center justify-content-start">
                    <div className="">
                        <Card.Img
                            variant="top"
                            src={cartProduct.productImage}
                            alt={`${cartProduct.productName}`}
                            style={{ width: "100%", maxWidth: "200px", maxHeight: "200px" }}
                        />
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <Card.Title>{cartProduct.productName}</Card.Title>
                        <Card.Text>{cartProduct.description}</Card.Text>
                        <Card.Title>$ {cartProduct.price}</Card.Title>
                        <div className="add-to-card-btn d-flex align-items-center gap-2" style={{maxWidth:"180px"}}>
                            <button className="btn text-white">
                                <FaMinus size={14} />
                            </button>
                            <span>Add to cart</span>
                            <button className="btn text-white">
                                <FaPlus size={14} />
                            </button>
                        </div>
                    </div>
                    <div className="cart-img-container">
                        <img src = "https://res.cloudinary.com/dnml2vs6t/image/upload/v1729411451/czfyowgki5p592sjpjel.png"
                         alt = "cart" className = "cart-img"/>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default CartCard