import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const products = [
    {
        title: 'Pos System',
        description: 'Your All Deals Can Accelerating Now',
        img: './assets/projectPhoto/1_d0zQ5oeAJ0NaVlgYQGrVkQ.png'
    },
    {
        title: 'Ladder Game',
        description: 'You Can Play This Game Funny Free Time',
        img: './assets/projectPhoto/ladder game.png'
    },
    {
        title: 'Potpolio Web',
        description: 'This Web Design For Person Portpolio',
        img: './assets/projectPhoto/web-design.jpg'
    }
];


const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[10],
    },
    height: '100%',
}));

const ProductGrid = () => {
    return (
        <>
            <Grid container justifyContent="center" sx={{ textAlign: 'center', paddingBottom: "2rem" }}>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: 'bold',
                    color: '#004ba0',
                    marginBottom: '2rem',
                }}
            >
                Projects
            </Typography>

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
        </>
    );
};

export default ProductGrid;
