import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const AboutContainer = styled(Container)({
    fontFamily: 'Nunito, sans-serif',
    minHeight: '75px',
    width: '100%',
    backgroundColor: '#ffffff',
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
});

const StyledHeading = styled(Typography)({
    fontSize: '40px',
    lineHeight: '64px',
    fontWeight: 900,
    color: '#053480',
    marginBottom: '40px',
    textAlign: 'center',
});

const TextBlock = styled(Typography)({
    lineHeight: '20px',
    color: '#0a0a0a',
    fontSize: '20px',
    marginBottom: '40px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', // Shadow effect added
});

const ImageBox = styled(Box)({
    borderRadius: '50px',
    width: '100%',
    height: 'auto',
});

const StyledButton = styled(Button)({
    color: '#00B2EB',
    backgroundColor: '#FFF',
    boxShadow: '0px 12px 35px rgba(160, 121, 0, 0.2)',
    borderRadius: '100px',
    padding: '20px 50px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
        backgroundColor: '#1a98d7',
        color: '#FFF',
    },
});

const About = () => {
    return (
        <AboutContainer maxWidth="lg" sx={{ py: 5 }}>
            <StyledHeading variant="h3">About Us</StyledHeading>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <ImageBox component="img" src="./assets/logo.jpg" alt="About Us" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextBlock variant="body1">
                        Welcome to our company! We specialize in web and software development, delivering innovative solutions
                        that make a positive impact.
                    </TextBlock>
                    <TextBlock variant="body1">
                        Our mission is to help businesses grow through high-quality digital products, personalized to meet the
                        unique needs of each client.
                    </TextBlock>

                </Grid>
            </Grid>
        </AboutContainer>
    );
};

export default About;
