import React from 'react';
import Slider from 'react-slick';
import { sliderImages } from '../../data'

const Carrousel = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500
    }
    
    return (
        <div className='carrousel_wrapper'>
        <Slider {...settings}>
            {sliderImages.map((item) => (
                <div key={item.id}>
                    <img
                        className='carrousel-img'
                        alt='Imagen de promoción'
                        src={item.img}
                    />
                </div>
            ))}
        </Slider>
    </div>
    );
};

export default Carrousel;