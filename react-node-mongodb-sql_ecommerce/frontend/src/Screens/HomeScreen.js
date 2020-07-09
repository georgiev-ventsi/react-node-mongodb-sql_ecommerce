import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props) {
    return  <ul className="products">
    {
        // render products
        data.products.map(product =>
            <li>
                <div className="product">
                    <img className="product-image" src={product.image} alt="automower 105" />
                    <div className="product-name">
                        <Link to={'/product/'+ product._id} >"{product.name}</Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price} лв.</div>
                    <div className="product-rating">{product.rating} Stars({product.numReviews})</div>
                </div>
            </li>
        )
    }
</ul>
}

export default HomeScreen;
