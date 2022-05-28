import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
      <div className="row">
        {products.map((product) => {
          const { id, title, image, price, category } = product;
          return (
            <div className="col-md-3 mb-5" key={id}>
              <Link to={`/product/${id}`}>
                <div className="card border-0 shadow" style={{minHeight: '550px'}}>
                  <div
                    style={{ width: "200px", height: "280px", padding: "20px", objectFit: 'contain' }}
                  >
                    <img
                      src={image}
                      className="card-img-top mb-3 img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <hr />
                    <h4 className="card-title">{title}</h4>
                    <p>$ {price}</p>
                    <p className="card-text text-secondary">{category}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
  );
};

export default ProductComponent;
