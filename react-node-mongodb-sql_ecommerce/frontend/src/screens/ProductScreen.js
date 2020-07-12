import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            // 
        };
    }, []);

    return (
        <div>
            <div className="back-to-result">
                <Link to="/"> Назад</Link>
            </div>
            {loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    (
                        <div className="details">
                            <div className="details-image">
                                <img src={product.image} alt="product" />
                            </div>
                            <div className="details-info">
                                <ul>
                                    <li>
                                        <h4>{product.name}</h4>
                                    </li>
                                    <li>
                                        {product.rating} Звезди ({product.numReviews} мнения)
                                    </li>
                                    <li>
                                        Цена: <b>{product.price} лв.</b>
                                    </li>
                                    <li>
                                        Описание:<div>{product.description}</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="details-action">
                                <ul>
                                    <li>
                                        Цена: {product.price}
                                    </li>
                                    <li>
                                        Статус: {product.status}
                                    </li>
                                    <li>
                                        Количество: <select name="" id="">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                        </select>
                                    </li>
                                    <li>
                                        <button className="button" >Купи</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
            }

        </div>)

}

export default ProductScreen;
