import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ProductPopup from './ProductPopup';
const Card = (props) => {
    const {imageURL, title, price,productId, discount} = props;
    const [show,setShow] = useState({state:true})
    const priceNUM = parseInt(price)
    const discountNUM = parseInt(discount);
    const discountedprice = priceNUM-(priceNUM*discountNUM/100)
    const showPopup = () =>{
       show.state ? setShow({state:false}):setShow({state:true});
    }
    console.log(show)
  return (
        <div className={productId}  >
            <div className='card_main'>
                <div onClick={()=>showPopup()} className='card_img'>
                    <img src={imageURL} alt= "prod-img"/>
                </div>
                <div className='card_details'>
                    <h4>{title}</h4>
                    <h5> ${discountedprice} <span style={{textDecoration: 'line-through' ,color:'red'}}>${price}</span></h5>
                </div>
                <Link className='buynow' to="/orders" >Buy Now</Link>
                
            </div>
            {/* {show && <ProductPopup product={productId}/>} */}
                
            
        </div>
  )
}

export default Card;