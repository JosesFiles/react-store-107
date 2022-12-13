import { useEffect, useState} from 'react';
import Product from '../components/product';
import DataService from '../services/dataService';
import "./catalog.css";

function Catalog () {
    const [products, setProducts]= useState([]);

    useEffect(
        ()  => {
            console.log ("catalog loaded");
            let service = new DataService();
            let prodList = service.getCatalog();
            setProducts (prodList);
        }, [] );

    return (
        <div className="catalog">
            <h3> Check our lateast phone!</h3>
            <h5>We have {products.lenght} amazing items for you</h5>
            
            <div className="products">
                { products.map( prod => <Product data={prod}/>)}

            </div>
        </div>

    );
}

export default Catalog;