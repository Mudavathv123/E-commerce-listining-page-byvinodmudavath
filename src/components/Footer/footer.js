
import { Link } from 'react-router-dom'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook,FaSquareThreads} from "react-icons/fa6";
import { FaYoutube,FaLinkedin } from "react-icons/fa";
import './footer.css'

const Footer = () => {

    return (
        <div className = "footer-cotainer p-5" style={{background:"#F0FFE5", marginTop:"50px"}}>
            <div className="d-flex align-items-start justify-content-between flex-wrap gap-5 mt-5">
                <ul className="list-group gap-2">
                    <li><h2 className='footer-sub-head'>SUBSCRIBE TO OUR NEWSLETTER</h2></li>
                    <li>
                        <Link  className = "footer-link" to={"#"} >
                            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim
                        </Link>
                    </li>
                    <li>
                        <input type='text' placeholder='Enter your Email address' />
                    </li>
                    <li>
                        <button className='btn btn-success'>SUBSCRIBE</button>
                    </li>
                </ul>
                <ul>
                    <li><h2 className='footer-sub-head'>About us</h2></li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Our Story</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Blogs</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}> Careers</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Contact Us</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Help & Support</Link>
                    </li>
                </ul>
                <ul>
                    <li><h2 className='footer-sub-head'>our services</h2></li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Book Maali</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Plant Day Care</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Rent Plants</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Plants & Pots</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Gardening Tools</Link>
                    </li>
                </ul>
                <ul>
                    <li><h2 className='footer-sub-head'>useful links</h2></li>
                    <li>
                        <Link className = "footer-link" to={"#"}>My Account</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Orders & Returns</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Track Order</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className = "footer-link" to={"#"}>Return, Refund & Replacement Policy</Link>
                    </li>
                </ul>
                <ul>
                    <li><h2 className='footer-sub-head'>GET IN TOUCH</h2></li>
                    <li className = "footer-link">
                        Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003
                    </li>
                    <li className = "footer-link">
                        Call: +919958287272
                    </li>
                    <li className = "footer-link">
                        Email: care@chaperoneplants.com
                    </li>
                </ul>
            </div>
            <div className=''>
                <h2 className='footer-sub-head'>CHAPERONE</h2>
                <p className = "footer-link">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
                    necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis.
                    Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro
                    excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius.
                    Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                <h2 className='footer-sub-head'>
                    Follow us on
                </h2>
                <ul className='d-flex align-items-center gap-3 pl-5'>
                    <li><IoLogoInstagram size={24}/></li>
                    <li><FaFacebook size={24}/></li>
                    <li><FaSquareThreads size={24}/></li>
                    <li><FaYoutube size={24}/></li>
                    <li><FaLinkedin size={24}/></li>
                </ul>
            </div>
        </div>
    )

}

export default Footer
