import React from 'react'
import './Popular.css'
import data_product from '../Assets/Images/data'
import Item from '../Items/Item'

export const Popular = () => {
  return (
    <div className="popular">
        <h1>POPULAR</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} image_hover={item.image_hover} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular