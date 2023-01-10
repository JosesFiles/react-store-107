import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from 'react';


function Product(props) {
    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(qty){
        console.log("quantity change", qty);
        setQuantity(qty);

    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="product">
            <img src={"/images/"+props.data.image} alt=""></img>

            <h5>{props.data.title}</h5>

            <div className="prices">
            <label>Total: ${getTotal()}</label>
            <label>Price: ${props.data.price.toFixed(2)}</label>
            </div>

            <QuantityPicker onChange={handleQuantityChange}/>

            <button>Add</button>
        </div>
    )
}

export default Product;