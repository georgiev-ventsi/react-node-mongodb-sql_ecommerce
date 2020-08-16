import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listBrushcutters } from '../actions/productActions';

function BerushcutterScreen(props) {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listBrushcutters());

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
                                        <div className="product-techData">Обем на цилиндъра: {product.techDisplacement} см³</div>
                                        <div className="product-techData">Мощност: {product.techPower} kW</div>
                                        <div className="product-techData">Дължина на шината: {product.techBar}</div>
                                        <div className="product-price"> <strike>Цена: {product.price},00 лв.</strike></div>
                                        <div className="product-sale sales-color">Промо цена: {product.salePrice},00 лв.</div>
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
                                        <div className="product-techData">Обем на цилиндъра: {product.techDisplacement} см³</div>
                                        <div className="product-techData">Мощност: {product.techPower} kW</div>
                                        <div className="product-techData">Дължина на шината: {product.techBar}</div>
                                        <div className="product-price">Цена: {product.price},00 лв.</div>
                                    </div>
                                </li>

                        )
                    }
                </ul>)
}

export default BerushcutterScreen;
