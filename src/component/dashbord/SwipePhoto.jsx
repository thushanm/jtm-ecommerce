import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';
import { DashBordButtons } from "./DashBordButtons.jsx";

const photos = [
    { id: 1, src: ' ./assets/carosl_photo/photo1.jpg', alt: 'Image 1' },
    { id: 2, src: ' ./assets/carosl_photo/photo2.jpg', alt: 'Image 2' },
    { id: 3, src: ' ./assets/carosl_photo/photo3.jpg', alt: 'Image 3' },
    { id: 4, src: ' ./assets/carosl_photo/photo4.jpg', alt: 'Image 4' },
];

export const SwipePhoto = () => {
    const sliderRef = useRef(null); // Create a ref for the slider

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
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

    const handleMouseEnter = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPause(); // Pause the slider
        }
    };

    const handleMouseLeave = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay(); // Resume the slider
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                position: 'relative',
            }}
        >
            <Slider {...settings} ref={sliderRef}>
                {photos.map(photo => (
                    <Box key={photo.id} sx={{ position: 'relative', padding: { xs: 1, sm: 2 }, width: '100%' }}>
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            style={{
                                height: '90%',
                                width: '100%',
                                borderRadius: '10px',
                                objectFit: 'cover',
                                display: "block",
                                margin: "0 auto",
                            }}
                        />

                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                                color: '#ffffff',
                                zIndex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <DashBordButtons
                                sx={{ fontWeight: 'bold' }}
                                buttonText="LET'S TALK"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};
