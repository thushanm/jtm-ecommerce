import React from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";

const ContactUs = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                padding: "2rem",
            }}
        >
            <Grid container spacing={2} maxWidth="sm" sx={{ width: "100%" }}>

                <Grid item xs={12}>
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        sx={{ fontFamily: 'Open Sans, sans-serif', fontWeight: "bold", color: "#004ba0", marginBottom: "2rem" }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        sx={{ color: "#6b6b6b", marginBottom: "2rem" }}
                    >
                        We'd love to hear from you! Please fill out the form below to get in touch.
                    </Typography>
                </Grid>

                {/* Form Section */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        required
                        size="small"
                        sx={{
                            marginBottom: "1rem",
                            backgroundColor: "white",
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": { borderColor: "#004ba0" },
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        required
                        size="small"
                        sx={{
                            marginBottom: "1rem",
                            backgroundColor: "white",
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": { borderColor: "#004ba0" },
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        sx={{
                            marginBottom: "1.5rem",
                            backgroundColor: "white",
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": { borderColor: "#004ba0" },
                            },
                        }}
                    />
                </Grid>

              
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        size="medium"
                        fullWidth
                        sx={{
                            backgroundColor: "#004ba0",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#00397a",
                            },
                            padding: "0.5rem",
                            borderRadius: "8px",
                            textTransform: "none",
                        }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactUs;
