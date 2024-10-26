import React from 'react'
import './Hero.css'

// import hero_image from '../Assets/images/Photoshoot-Images/muth-edit-front-nobg.png'
import image_1 from '../Assets/images/Photoshoot-Images/1-MBF-nobg-small.png'
import image_2 from '../Assets/images/Photoshoot-Images/2-MBF-small.jpg'
import image_3 from '../Assets/images/Photoshoot-Images/3-MBF-small.jpg'

export const Hero = () => {
    return (

        <div className="shopping-area">
            <div className="product">
                <img src={image_1} loading='lazy' alt="Product 1" />
                <a href="" className='overlay-text'>SHOP ALL</a>
            </div>
            <div className="product">
                <img src={image_2} loading='lazy' alt="Product 2" />
                <a href="" className='overlay-text'>SHOP NATIONAL TEAMS</a>
            </div>
            <div className="product">
                <img src={image_3} loading='lazy' alt='Product 3' />
                <a href="" className='overlay-text'>SHOP BEST SELLERS</a>
            </div>
        </div>

    )
}

export default Hero