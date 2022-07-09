import React  from 'react'
import Card from '../components/Card'
import { useProductsContextConsumer } from '../context/producDetailsContext'
const HomePage = () => {
  const {products} = useProductsContextConsumer();
  return (
    <div>
      <h1>Our Products</h1>
      <div className='card-container'>
          {products.map((prod) => (
            <Card 
              key={prod.productId}
              title = {prod.name}
              price = {prod.price}
              imageURL = {prod.imageURL}
              productId = {prod.productId}
              discount = {prod.discount}
              
            />
          ))}
      </div>

    </div>
  )
}

export default HomePage