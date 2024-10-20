import { Card, CardText, Col } from "react-bootstrap"
import { FaPlus, FaMinus } from "react-icons/fa6";
import './cardstyle.css';
import { Link } from "react-router-dom";
import CardModel from "../CardModal/CardModel";
import { context } from "../../App";
import { useContext } from "react";

const ProductCard = ({ product }) => {

    const { handleAddCart, cartProducts, isOpen, handleIsOpen } = useContext(context);
    console.log(cartProducts)

    const handleAddClick = () => {
        handleAddCart(product)
        handleIsOpen(true)
    }

    return (
        <Col key={product.uniqueId} className="mb-4">
            <Card style={{ maxWidth: "268px", border: "none" }}>
                <Card.Body className="d-flex flex-column align-items-center px-0">
                    <div className="d-flex flex-column img-and-btncard">
                        <Card.Img
                            variant="top"
                            src={product.productImage}
                            alt="plants ot pots"
                            className="p-3"
                            style={{ width: "100%", maxWidth: "255px", height: "296px" }}
                        />
                        <Link to={`/view-product/${product.uniqueId}`} className="view-product-btn">View Product</Link>
                    </div>

                    <div className="d-flex flex-column align-items-start mt-4">
                        <Card.Title className="product-name">{product.productName}</Card.Title>
                        <Card.Text className="description">{product.description}</Card.Text>
                        <div className="d-flex gap-2 mb-2">
                            <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1729334206/MyMiniProjectsImages/ebnn7risv2mmiwzt12wj.png" alt="rating" className="rating" />
                            <span>{product.rating}</span>
                        </div>

                        <div className="d-flex gap-5">
                            <CardText className="before-offer-price">$ {product.beforeOfferPrice}</CardText>
                            <Card.Title className="price">$ {product.price}</Card.Title>
                        </div>
                        <div className="d-flex">
                            <div className="add-to-card-btn d-flex align-items-center gap-2">
                                <button className="btn text-white">
                                    <FaMinus size={14} />
                                </button>
                                <span>Add to cart</span>
                                <button className="btn text-white" onClick={handleAddClick}>
                                    <FaPlus size={14} />
                                </button>
                                {
                                    isOpen && <CardModel isOpen={isOpen} />

                                }
                            </div>
                            <button className="by-onrent-btn">By on Rent</button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard