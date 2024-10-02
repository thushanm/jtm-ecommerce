// SwipePhoto.jsx
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box
            sx={{
                width: {
                    xs: '100%',
                    sm: '90%',
                    md: '80%',
                },
                margin: 'auto',
            }}
        >
            <Slider {...settings}>
                {photos.map(photo => (
                    <Box key={photo.id} sx={{ padding: { xs: 1, sm: 2 ,width:'100%'} }}>
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            style={{
                                height:'90%',
                                width: '100%',
                                borderRadius: '10px',
                                objectFit: 'cover',
                                display: "block",
                                margin: "0 auto",
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};
