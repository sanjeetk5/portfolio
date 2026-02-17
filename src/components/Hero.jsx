import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-scroll';

const Hero = () => {
    const theme = useTheme();

    const typingEffect = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: `radial-gradient(circle at 20% 20%, rgba(0, 229, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 64, 129, 0.15) 0%, transparent 50%)`,
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={typingEffect}
                        >
                            <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 2 }}>
                                <motion.span variants={letter}>H</motion.span>
                                <motion.span variants={letter}>e</motion.span>
                                <motion.span variants={letter}>l</motion.span>
                                <motion.span variants={letter}>l</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>,</motion.span>
                                <motion.span variants={letter}> </motion.span>
                                <motion.span variants={letter}>I</motion.span>
                                <motion.span variants={letter}>'</motion.span>
                                <motion.span variants={letter}>m</motion.span>
                            </Typography>

                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
                            >
                                <Typography variant="h1" gutterBottom sx={{
                                    textShadow: `0 0 20px ${theme.palette.primary.main}`,
                                    fontWeight: 900
                                }}>
                                    Sanjeet Kumar
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                <Typography variant="h4" color="textSecondary" gutterBottom sx={{ mb: 3 }}>
                                    Full Stack Developer &<br />
                                    <span style={{ color: theme.palette.secondary.main, textShadow: `0 0 10px ${theme.palette.secondary.main}` }}>
                                        UI/UX Enthusiast
                                    </span>
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                            >
                                <Typography variant="body1" color="textSecondary" paragraph sx={{ maxWidth: 600, mb: 4, fontSize: '1.1rem' }}>
                                    I build pixel-perfect, engaging, and accessible digital experiences.
                                    Focusing on modern web technologies and creating intuitive interfaces.
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 1.5 }}
                            >
                                <Box>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="large"
                                        component={Link}
                                        to="projects"
                                        smooth={true}
                                        offset={-70}
                                        sx={{
                                            mr: 2,
                                            borderWidth: 2,
                                            fontSize: '1.1rem',
                                            '&:hover': {
                                                borderWidth: 2,
                                                boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                                                background: 'rgba(0, 229, 255, 0.1)'
                                            }
                                        }}
                                    >
                                        View Work
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        component={Link}
                                        to="contact"
                                        smooth={true}
                                        offset={-70}
                                        sx={{
                                            fontSize: '1.1rem',
                                            '&:hover': {
                                                boxShadow: `0 0 20px ${theme.palette.secondary.main}`,
                                            }
                                        }}
                                    >
                                        Contact Me
                                    </Button>
                                </Box>
                            </motion.div>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                        >
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: { xs: 280, md: 400 },
                                        height: { xs: 280, md: 400 },
                                        borderRadius: '50%',
                                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        padding: '5px',
                                        boxShadow: `0 0 60px rgba(0, 229, 255, 0.5)`,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed"
                                        alt="Sanjeet Kumar"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#132f4c',
                                            filter: 'grayscale(20%) contrast(1.1)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                filter: 'grayscale(0%) contrast(1)',
                                            }
                                        }}
                                    />
                                </Box>
                            </motion.div>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
