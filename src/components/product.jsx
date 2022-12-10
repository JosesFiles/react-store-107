import "./product.css";
import QuantityPicker from "./quantityPicker";


function Product(){
    return (
        <div className="product">
            <img src="https://picsum.photos/200/200" alt=""></img>

            <h5>Iphone 13 Pro Max</h5>
            <label>$999.99</label>

            <QuantityPicker />

            <button>Add</button>
        </div>
    )
}

export default Product;