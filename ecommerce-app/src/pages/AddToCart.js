import React from 'react'
import {useParams} from 'react-router-dom';
import { useProductsContextConsumer } from '../context/producDetailsContext';
const AddToCart = () => {
  const {products} = useProductsContextConsumer();
  const params = useParams();
  const {productId} = params;
  return (
    <div>
      
    </div>
  )
}

export default AddToCart