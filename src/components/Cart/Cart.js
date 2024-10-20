
import { useContext } from "react";
import { context } from "../../App";
import { Col, Container, Row } from "react-bootstrap";
import CartCard from "../Cartcard/CartCard";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartProducts } = useContext(context);

    return (
        <Container>
            <h2 className="">Cart Details</h2>
            <Row>

                {
                    cartProducts.length > 0 ? (
                        cartProducts.map(eachCartProduct => <CartCard cartProduct={eachCartProduct} key={eachCartProduct.uniqueId} />)
                    ) : (
                        <Col>
                            <div className="d-flex flex-column align-items-center justify-content-center gap-2" style={{ minHeight: "70vh" }}>
                                <h2>
                                    No Cart added
                                </h2>
                                <Link to={"/plants-and-pots"} >
                                    <button className="btn btn-success text-uppercase">Continue Shopping</button>
                                </Link>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

export default Cart