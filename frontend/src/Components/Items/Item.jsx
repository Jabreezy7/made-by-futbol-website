import React from 'react'
import './Item.css'

export const Item = (props) => {
    return (
        <div className='item'>
            <div className="image-container">
                <img src={props.image} className="default" alt="" />
                <img src={props.image_hover} className="hover" style={{display:'none'}} alt="" />
            </div>
            <div className="item-context">
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="item-price-new">
                        ${props.new_price}
                    </div>
                    <div className="item-price-old">
                        ${props.old_price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
