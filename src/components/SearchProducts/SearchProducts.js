
import { CiSearch } from "react-icons/ci";
import '../../App.css';
import { Container } from "react-bootstrap";

const SearchProducts = ({searchInput, onChangeSearchInput,onSeacrhInput}) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSeacrhInput()
    }

    return (
        <Container style={{ width: "100%", maxWidth: "370px" }} className="mt-3">
            <form className="input-group form-control align-items-center" onSubmit={handleSubmit}>
                <CiSearch size={24} />
                <input className="seach-input"
                    type="search"
                    placeholder="Search Plant"
                    value = {searchInput}
                    onChange={onChangeSearchInput}
                />
                <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1729341543/MyMiniProjectsImages/zsm9kadxzbcynzn6rite.png" alt="seacrh" className="seach-image" />
            </form>
        </Container>
    )
}

export default SearchProducts