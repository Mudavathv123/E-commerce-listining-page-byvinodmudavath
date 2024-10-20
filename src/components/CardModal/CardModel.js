
import Popup from "reactjs-popup"
import './cardmodel.css';
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { context } from "../../App";

const CardModel = ({ isOpen }) => {

    const {handleIsOpen} = useContext(context);

    const handleCloseModel = () => {
        handleIsOpen(false)
    }


    return (
        <Popup
            open={isOpen}
            onClose = {handleCloseModel}
            modal
            position={"center center"}
        >
            {close => (
                <div className="cart-container d-flex flex-column gap-3 p-4">
                    <button className="btn align-self-end" onClick={close}>
                        <IoClose size={20} />
                    </button>
                    <div>
                        <p className="cart-head">Your Cart</p>
                        <hr className="line" />
                    </div>
                    <div className="d-flex flex-column gap-4 align-items-center">
                        <h1 className="cart-title">Congratulations
                            <br />Order Placed!</h1>
                        <img
                            src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1729356951/MyMiniProjectsImages/ezw1umy8bfjh4xc56tq1.png"
                            alt="cart plant"
                            className="cart-plant-img"
                        />
                        <p className="cart-description">
                            Thank you for choosing Chaperone services.
                            We will soon get in touch with you!
                        </p>

                        <button className="continue-btn" onClick={close}>
                            continue shopping
                        </button>

                    </div>

                </div>
            )
            }
        </Popup>
    )

}

export default CardModel