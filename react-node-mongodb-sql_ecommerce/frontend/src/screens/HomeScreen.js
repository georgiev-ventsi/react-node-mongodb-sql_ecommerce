import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());

        return () => {
            // 
        };
    }, [])

    return loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
            (
                <ul className="products">
                    {
                        // render products
                        products.map(product =>
                            product.salePrice ?
                                <li key={product._id}>
                                    <div className="product">
                                        <Link to={'/product/' + product._id} >
                                            <img className="product-image" src={product.image} alt="product" />
                                        </Link>
                                        <div className="product-name">
                                            <Link to={'/product/' + product._id} >{product.name}</Link>
                                        </div>
                                        <div className="product-techData">{product.techDisplacement}</div>
                                        <div className="product-techData">{product.techPower}</div>
                                        <div className="product-techData">{product.techBar}</div>
                                        <div className="product-price">{product.price} лв.</div>
                                        <div className="product-sale">Промо цена {product.salePrice} лв.</div>
                                    </div>
                                </li>
                                :
                                <li key={product._id}>
                                    <div className="product">
                                        <Link to={'/product/' + product._id} >
                                            <img className="product-image" src={product.image} alt="product" />
                                        </Link>
                                        <div className="product-name">
                                            <Link to={'/product/' + product._id} >{product.name}</Link>
                                        </div>
                                        <div className="product-techData">{product.techDisplacement}</div>
                                        <div className="product-techData">{product.techPower}</div>
                                        <div className="product-techData">{product.techBar}</div>
                                        <div className="product-price">{product.price} лв.</div>
                                    </div>
                                </li>

                        )
                    }
                </ul>)
}

export default HomeScreen;
