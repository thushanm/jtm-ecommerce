import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';

const photos = [
    { id: 1, src: './public/assets/carosl_photo/photo_1.jpg', alt: 'Image 1' },
    { id: 2, src: './public/assets/carosl_photo/photo_2.jpg', alt: 'Image 2' },
    { id: 3, src: './public/assets/carosl_photo/photo_3.jpg', alt: 'Image 3' },
    { id: 4, src: './public/assets/carosl_photo/photo_5.jpg', alt: 'Image 4' },
];

export const SwipePhoto = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <Box sx={{ width: '80%', margin: 'auto' }}>
            <Slider {...settings}>
                {photos.map(photo => (
                    <Box key={photo.id} sx={{ padding: 2 }}>
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            style={{ width: '75%', borderRadius: '10px',display:"flex",alignSelf:"center",margin:"auto" }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};
