import { Col, Container, Row } from "react-bootstrap"
import ProductCard from "../ProductCard/ProductCard"
import SearchProducts from "../SearchProducts/SearchProducts"
import { products } from "../MockData/MockData"
import ProductPagination from "../Pagination/ProductPagination"
import { useState } from "react"
import Footer from "../Footer/footer"
import FilterProducts from "../FilterProducts/FiterProducts"

const ProductListing = () => {

    const [searchInput, setSeacrhInput] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(6);
    const [filteredProducts, setFilteredProducts] = useState(products)


    const handleInputSeacrh = (evt) => {
        setSeacrhInput(evt.target.value.toLowerCase())
    }

    const filterTheDataAterFromSubmit = () => {
        const newProducts = products.filter(product => product.productName.toLowerCase().includes(searchInput));
        setFilteredProducts(newProducts);
        setSeacrhInput("")
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const calculateTotalPages = (filteredProducts, productPerPage) => {
        const totalProducts = filteredProducts.length;
        return Math.ceil(totalProducts / productPerPage);
    }


    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage
    const slicedProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);


    const renderProducts = () => {
        return slicedProducts.length > 0 ? (
            slicedProducts.map(product => <ProductCard product={product} key={product.uniqueId} />)
        ) : (
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "400px", minWidth: "80vw" }}>
                <h1>Opps! No Products Found.</h1>
                <button onClick={() => filterTheDataAterFromSubmit()} className="btn btn-success">Back</button>
            </div>
        )
    }

    return (
        <>
            <SearchProducts
                onChangeSearchInput={handleInputSeacrh}
                searchInput={searchInput}
                onSeacrhInput={filterTheDataAterFromSubmit}
            />
            <Container>
                <Row>
                    <Col lg={4}><FilterProducts /></Col>
                  
                    <Col lg = {8} className="d-flex flex-wrap">  {renderProducts()}</Col>
                </Row>
                <Row>
                    <Col className="d-flex align-items-end justify-content-end">
                        <ProductPagination
                            currentPage={currentPage}
                            totalPages={calculateTotalPages(filteredProducts, productPerPage)}
                            onPageChange={handlePageChange}
                        />
                    </Col>
                </Row>

            </Container>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default ProductListing