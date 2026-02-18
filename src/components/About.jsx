import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const About = () => {
    const theme = useTheme();

    const skills = [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Framer', icon: 'https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png' }, // Custom URL for Framer
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50 }
        },
        hover: {
            scale: 1.05,
            boxShadow: `0 0 30px ${theme.palette.primary.main}40`,
            borderColor: theme.palette.primary.main,
            transition: { duration: 0.3 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 10 }
        },
        hover: {
            scale: 1.1,
            boxShadow: `0 0 20px ${theme.palette.secondary.main}`,
            borderColor: theme.palette.secondary.main,
            transition: { duration: 0.2 }
        }
    };

    return (
        <Box id="about" sx={{ py: 10, background: theme.palette.background.default, position: 'relative', overflow: 'hidden' }}>
            {/* Decorative Background Element */}
            <Box sx={{
                position: 'absolute',
                top: -100,
                right: -100,
                width: 400,
                height: 400,
                background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: 4,
                            mb: 2
                        }}
                    >
                        About Me
                    </Typography>
                </motion.div>

                <Grid container spacing={6} alignItems="center">
                    {/* Bio Section */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                        >
                            <Paper sx={{
                                p: 4,
                                borderRadius: 4,
                                background: 'rgba(255,255,255,0.03)',
                                backdropFilter: 'blur(10px)',
                                border: `1px solid ${theme.palette.divider}`,
                                height: '100%',
                            }}>
                                <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 700 }}>
                                    My Journey
                                </Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                                    I started my coding journey with a curiosity for how things work on the web.
                                    Over the years, I've honed my skills in the MERN stack, constantly pushing the boundaries of what's possible in the browser.
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                                    When I'm not coding, you can find me exploring new game worlds, tweaking my developer setup, or contributing to open-source projects.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Skills Section */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom color="secondary" sx={{ fontWeight: 700, mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
                            Tech Stack
                        </Typography>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{ width: '100%' }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: 3
                            }}>
                                {skills.map((skill) => (
                                    <motion.div key={skill.name} variants={skillVariants} whileHover="hover">
                                        <Paper sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: `1px solid ${theme.palette.divider}`,
                                            borderRadius: '50%', // Circular
                                            width: 100, // Fixed small size
                                            height: 100, // Fixed small size
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            mx: 'auto' // Center within grid cell
                                        }}>
                                            <Box
                                                component="img"
                                                src={skill.icon}
                                                alt={skill.name}
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    objectFit: 'contain',
                                                    mb: 0.5,
                                                    filter: theme.palette.mode === 'dark' ? 'drop-shadow(0 0 2px rgba(255,255,255,0.3))' : 'none'
                                                }}
                                            />
                                            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary', textAlign: 'center', fontSize: '0.7rem' }}>
                                                {skill.name}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
