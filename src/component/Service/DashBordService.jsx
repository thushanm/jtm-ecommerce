import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const products = [
    {
        title: 'Web Developing',
        description: 'We Are Making You Need Any Web Site Devoloping',
        img: './assets/services/web devoloping.gif'
    },
    {
        title: 'E Book Buying',
        description: 'You Can Now Mind Peace Ebook Buying',
        img: './assets/services/ebook.gif'
    },
    {
        title: 'Software Devoloping',
        description: 'You Need Any Type Software We Are Devoloping',
        img: './assets/services/softwre+devoloping.gif'
    }
];

const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)', // Slightly enlarge on hover
        boxShadow: theme.shadows[10], // Add a shadow effect on hover
    },
    height: '100%', // Ensures cards are aligned consistently
}));

const DashBordService = () => {
    return (
        <Grid container justifyContent="center" sx={{ textAlign: 'center', paddingBottom: "2rem" }}>
            <Grid item xs={12}>
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: "bold",
                        color: "#004ba0",
                        marginBottom: "2rem",
                    }}
                >
                    Our Service
                </Typography>
            </Grid>

            {/* Service Cards */}
            <Grid container spacing={3} justifyContent="center">
                {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <StyledCard elevation={3}>
                            <CardMedia
                                component="img"
                                height="250" // Consistent image size for all cards
                                image={product.img}
                                alt={product.description}
                                sx={{ objectFit: 'cover' }} // Makes the image cover the card proportionally
                            />
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default DashBordService;
