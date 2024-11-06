import React from 'react'
import './Hero.css'

// import hero_image from '../Assets/images/Photoshoot-Images/muth-edit-front-nobg.png'
import image_1 from '../Assets/Images/Photoshoot-Images/Edited-Images/1-MBF-min.jpg'
import image_2 from '../Assets/Images/Photoshoot-Images/Edited-Images/2-MBF-min.png'
import image_3 from '../Assets/Images/Photoshoot-Images/Edited-Images/3-MBF-min.png'

import hero_image1 from '../Assets/Images/Dynamic-Images/Hero-1.webp'
import hero_image2 from '../Assets/Images/Dynamic-Images/Hero-2.webp'
import hero_image3 from '../Assets/Images/Dynamic-Images/Hero-3.webp'

export const Hero = () => {
    return (

        <div className="shopping-area">
            {/* <div className="product">
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
            </div> */}
            <img src={hero_image1} alt="" />
        </div>

    )
}

export default Hero


