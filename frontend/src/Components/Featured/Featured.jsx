import React from 'react'
import './Featured.css'
// import featured_image from '../Assets/Images/Photoshoot-Images/Edited-Images/1-MBF-featured.webp'
import featured_image1 from '../Assets/Images/Shirt-Images/Select-Players/Ronaldinho/Edited-Images/Ronaldinho-barca-front-small.webp'
import featured_image2 from '../Assets/Images/Shirt-Images/Select-Players/Ronaldinho/Edited-Images/Ronaldinho-barca-front-small.webp'
import featured_image3 from '../Assets/Images/Shirt-Images/Select-Players/Ronaldinho/Edited-Images/Ronaldinho-barca-front-small.webp'
import featured_image4 from '../Assets/Images/Shirt-Images/Select-Players/Ronaldinho/Edited-Images/Ronaldinho-barca-front-small.webp'

import featured_imageDynamic1 from '../Assets/Images/Dynamic-Images/Dynamic-1.webp'
import featured_imageDynamic2 from '../Assets/Images/Dynamic-Images/Dynamic-2.webp'
import featured_imageDynamic3 from '../Assets/Images/Dynamic-Images/Dynamic-3.webp'
import featured_imageDynamic4 from '../Assets/Images/Dynamic-Images/Dynamic-4.webp'

export const Featured = () => {
    return (
        <div className="featured">
            <div className="featured-1">
                <img src={featured_imageDynamic4} alt="" />
                <div className="text-overlay-1">
                    <h1>NEYMAR<br />BRAZIL TEE</h1>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className="featured-2">
                <img src={featured_imageDynamic2} alt="" />
                <div className="text-overlay-2">
                    <h1>NEYMAR<br />BRAZIL TEE</h1>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className="featured-3">
                <img src={featured_imageDynamic1} alt="" />
                <div className="text-overlay-3">
                    <h1>NEYMAR<br />BRAZIL TEE</h1>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className="featured-4">
                <img src={featured_imageDynamic3} alt="" />
                <div className="text-overlay-4">
                    <h1>NEYMAR<br />BRAZIL TEE</h1>
                    <button>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
