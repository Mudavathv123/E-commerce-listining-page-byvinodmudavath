
import { Link, useParams } from "react-router-dom"
import { products } from "../MockData/MockData";

const ViewProduct = () => {
    const {id} = useParams();

    const product = products.find(eachProduct => eachProduct.uniqueId === parseInt(id))

    console.log(product)

    return (
        <div className="view-product-container">
            <h2 className="thank-msg">Thank you for your interest in 
                <span className="view-product-name">{product.productName}</span>
            </h2>
            <Link to = {"/plants-and-pots"} className = "btn btn-success">
                Back
            </Link>
        </div>
    )

}

export  default ViewProduct