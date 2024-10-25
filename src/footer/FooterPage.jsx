import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
    backgroundColor: '#333',
    color: 'white',
    padding: '40px 0',
    marginTop: '40px',
});

const FooterText = styled(Typography)({
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#b3b3b3',
});

const FooterHeading = styled(Typography)({
    fontSize: '18px',
    fontWeight: 600,
    color: 'white',
    marginBottom: '20px',
});

const SocialIcon = styled(IconButton)({
    color: '#00B2EB',
    marginRight: '10px',
    '&:hover': {
        color: '#1a98d7',
    },
});

const FooterPage = () => {
    return (
        <FooterContainer>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {/* About Us Section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <FooterHeading>About Us</FooterHeading>
                        <FooterText>
                            We specialize in providing high-quality web and software development services.
                            Our mission is to help businesses achieve their goals through innovative digital solutions.
                        </FooterText>
                    </Grid>

                    {/* Contact Section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <FooterHeading>Contact Us</FooterHeading>
                        <FooterText>Phone: +94771793861</FooterText>
                        <FooterText>Email: jtmprosolution.com</FooterText>
                        <FooterText>Address: Tangalle Sri Lanka</FooterText>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <FooterHeading>Follow Us</FooterHeading>
                        <Box>
                            <SocialIcon href="https://facebook.com" target="_blank"><Facebook /></SocialIcon>
                            <SocialIcon href="https://twitter.com" target="_blank"><Twitter /></SocialIcon>
                            <SocialIcon href="https://instagram.com" target="_blank"><Instagram /></SocialIcon>
                            <SocialIcon href="https://linkedin.com" target="_blank"><LinkedIn /></SocialIcon>
                        </Box>
                    </Grid>
                </Grid>


                <Divider sx={{ borderColor: '#555', marginY: 4 }} />
                <Box textAlign="center">
                    <FooterText>© 2024 JTM Pro. All Rights Reserved.</FooterText>
                </Box>
            </Container>
        </FooterContainer>
    );
};

export default FooterPage;
