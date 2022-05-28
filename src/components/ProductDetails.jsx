import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProducts, selectedProducts } from '../redux/actions/productActions';

const ProductDetails = () => {
  const product = useSelector((state) => state.product)
  const {productId} = useParams();
  const dispatch = useDispatch();
  console.log(productId)
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((response) => {
      console.log(response.data);
      dispatch(selectedProducts(response.data));
    })
    .catch(error => console.log(error))

    return() => {
      dispatch(removeSelectedProducts())
    }
  }, [productId, dispatch]);

  
  return (
    <div className="container mt-5">
      <div className="card border-0 shadow p-5">
        <div className="card-body">
          <h3 className="my-4">Shopping Cart</h3>
          <hr />
          {Object.keys(product).length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div className="row">
              <div className="col-md-4">
                <img src={product.image} alt="product" className="img-fluid" />
              </div>
              <div className="col-md-4 my-5" style={{ paddingTop: "50px" }}>
                <h2>{product.title}</h2>
                <p className="text-warning">{product.category}</p>
                <p className="text-secondary">{product.description}</p>

                <button className='btn btn-warning'>Add to cart</button>
              </div>
              <div className="col-md-2 my-5" style={{ paddingTop: "50px" }}>
                <button
                  className="btn btn-secondary mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  -
                </button>
                <span className="mx-3">2</span>
                <button
                  className="btn btn-secondary mx-2"
                  style={{ borderRadius: "50%" }}
                >
                  +
                </button>
              </div>
              <div className="col-md-2 my-5" style={{ paddingTop: "50px" }}>
                <h2>$ {product.price}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails