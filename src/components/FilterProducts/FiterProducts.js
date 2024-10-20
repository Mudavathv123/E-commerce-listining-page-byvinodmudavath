import { FaPlus } from "react-icons/fa6";

const FilterProducts = () => {

    return (
        <div className="filter-container p-3" style={{background:"#F0FFE5", width:"304px"}}>
            <div className="d-flex align-items-center justify-content-between">
                <span>Filter</span>
                <span>CLEAR ALL</span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Type of Plants</span>
                <span><FaPlus size={16} /></span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Price</span>
                <span><FaPlus size={16} /></span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Nursery</span>
                <span><FaPlus size={16} /></span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Ideal Plants Location</span>
                <span><FaPlus size={16} /></span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Indoor/ Outdoor</span>
                <span><FaPlus size={16} /></span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Maintenance</span>
                <span><FaPlus size={16} /></span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Plant Size</span>
                <span><FaPlus size={16} /></span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Water Schedule</span>
                <span><FaPlus size={16} /></span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Color</span>
                <span><FaPlus size={16} /></span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Seasonal</span>
                <span><FaPlus size={16} /></span>
            </div>
            <hr/>
            <div className="d-flex align-items-center justify-content-between">
                <span>Light Efficient</span>
                <span><FaPlus size={16} /></span>
            </div>
        </div>
    )

}

export default FilterProducts