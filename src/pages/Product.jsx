import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProductService from '../services/ProductService';
import logo from '../logo.svg';

const Product = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => { fetchProducts() }, []);

  const fetchProducts = () => {
    ProductService.getAll()
      .then((res) => {
        setProducts(res.data.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <MainLayout>
      <h1 className="mt-3">Product</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/product/new" className="btn btn-success">
            Add a Product
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {products.map((p) => (
          <ProductList product={p} />
        ))}
      </div>
    </MainLayout>
  )
}

const ProductList = (props) => {
  console.log(props)
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <img src={logo} alt="" />
          <div className="card-text">
            <h5>{props.product.name}</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, saepe!</p>
            <h5>${props.product.price}</h5>
            <NavLink to={'/product/' + props.product.
              _id} className="btn btn-primary">
              Learn More
            </NavLink>{' '}
            <NavLink to={'/product/' + props.product._id} className="btn btn-success">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product