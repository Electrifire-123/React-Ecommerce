import React from "react";
import { useProductsContextConsumer } from "../context/producDetailsContext";
const ProductPopup = ({product}) => {
  const { products } = useProductsContextConsumer();
  const popup = products.filter((id)=>{
      return id.productId === product;
    });
    const {imageURL, title, price,productId, discount} = popup;
    const priceNUM = parseInt(price)
    const discountNUM = parseInt(discount);
    const discountedprice = priceNUM-(priceNUM*discountNUM/100)
  return(
     <div className="card-popup">
        <img src={imageURL} alt={title}/>
        <div>
        <h4>{title}</h4>
        <h5>${discountedprice} <span style={{textDecoration: 'line-through' ,color:'red'}}>${price}</span></h5>
        </div>
    </div>
  )
};

export default ProductPopup;
