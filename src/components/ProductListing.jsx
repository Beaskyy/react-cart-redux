import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'

const ProductListing = () => {
  const products = useSelector((state) => state)
  console.log(products)
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(response => {
      console.log(response.data);
      dispatch(setProducts(response.data))
    })
  }, [dispatch]);

  console.log('Products', products)

  return (
    <div className='container' style={{marginTop: '50px'}}>
      <ProductComponent />
    </div>
  )
}

export default ProductListing