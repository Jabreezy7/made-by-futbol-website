import React, { lazy } from 'react';
import './NewDrops.css';
import new_drop from '../Assets/Images/new_drops';
import Item from '../Items/Item';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

export const NewDrops = () => {
    const settings = {
        lazy: true,
        cssMode: true,
        spaceBetween: 10,
        pagination: {
            clickable: true,
            type: 'none',
        },
        navigation: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    };

    return (
        <div className="new-drops">
            <h1 id='title'>NEW DROPS</h1>
            <hr />
            <div className="drops">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#000',
                        '--swiper-pagination-color': '#000',
                    }}
                    modules={[Navigation, Pagination]}
                    {...settings}
                >
                    {new_drop.map((item, i) => (
                        <SwiperSlide key={i}>
                            <Item
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                image_hover={item.image_hover}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default NewDrops;
