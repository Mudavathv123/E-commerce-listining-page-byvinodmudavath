import { Link } from "react-router-dom"
import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import './../../App.css'
import { useContext } from "react";
import { context } from "../../App";

const NavBar = () => {

    const {cartProducts} = useContext(context);
  
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid gap-5 ml-5">
                <Link className="logo" to={"/"}>
                    <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1729335273/MyMiniProjectsImages/nzy8sq6bz6llsvjisv1a.png" alt="logo" />
                    <span className="logo-text">Chaperone</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/plants-and-pots"}>
                                Plants & Pots
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle">
                                Tools
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item">Action</Link></li>
                                <li><Link className="dropdown-item" >Another action</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle">
                                Our Services
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item">Action</Link></li>
                                <li><Link className="dropdown-item" >Another action</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"#"}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"#"}>
                                Our Story
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link active" aria-current="page" to={"#"}>
                                FAQs
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active d-flex flex-column align-items-center" aria-current="page" to={"#"}>
                                <GoPerson size={24} />
                                <span>My Profile</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active d-flex flex-column align-items-center ml-2" aria-current="page" to={"/cart"}>
                                {
                                    cartProducts.length > 0 && <span className="count">{cartProducts.length}</span>
                                }
                                <BsCart3 size={24} />
                                <span>Cart</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar