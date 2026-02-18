import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

const Experience = () => {
    const theme = useTheme();

    const experiences = [
        {
            id: 1,
            role: 'Masters of Computer Applications',
            company: 'Noida institute of engineering and Technology',
            period: '2024 - Present',
            description: 'Pursuing my masters degree',
            type: 'education',
        },
        {
            id: 2,
            role: 'Frontend Developer',
            company: 'Maskottchen Technology',
            period: '2023 - 2024',
            description: 'Assisted in the development of company project which is an IOT based project and worked in the frontend part of the project using ReactJS',
            type: 'work',
        },
        {
            id: 3,
            role: 'Chemistry Hons. Degree',
            company: 'Magadh University',
            period: '2016 - 2019',
            description: 'Bachelor of Science in Chemistry.',
            type: 'education',
        }
    ];

    return (
        <Box id="experience" sx={{ py: 10, position: 'relative', overflow: 'hidden' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    viewport={{ once: true }}
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
                            letterSpacing: 2,
                            mb: 8
                        }}
                    >
                        Mission Log
                    </Typography>
                </motion.div>

                <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
                    {/* Vertical Line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: { xs: 20, md: '50%' },
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            transform: { md: 'translateX(-50%)' }
                        }}
                    />

                    {experiences.map((exp, index) => (
                        <Box
                            key={exp.id}
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row-reverse' : 'row' },
                                mb: 6,
                                position: 'relative'
                            }}
                        >
                            {/* Icon Marker */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: 20, md: '50%' },
                                    transform: 'translateX(-50%)',
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    background: theme.palette.background.default,
                                    border: `2px solid ${theme.palette.primary.main}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 2,
                                    boxShadow: `0 0 15px ${theme.palette.primary.main}`
                                }}
                            >
                                {exp.type === 'work' ? <WorkIcon color="primary" fontSize="small" /> : <SchoolIcon color="secondary" fontSize="small" />}
                            </Box>

                            {/* Content Spacer for Desktop */}
                            <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />

                            {/* Content Card */}
                            <Box sx={{ flex: 1, pl: { xs: 8, md: 0 }, pr: { md: 0 }, py: 1 }}>
                                <motion.div
                                    initial={{ opacity: 0, x: { xs: 50, md: index % 2 === 0 ? -50 : 50 } }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                >
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 3,
                                            borderRadius: 2,
                                            background: 'rgba(255,255,255,0.03)',
                                            border: `1px solid ${theme.palette.divider}`,
                                            borderLeft: `4px solid ${index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main}`,
                                            position: 'relative',
                                            mx: { md: 4 },
                                            '&:hover': {
                                                boxShadow: `0 0 20px ${theme.palette.primary.main}30`,
                                                transform: 'scale(1.02)',
                                                transition: 'all 0.3s ease'
                                            }
                                        }}
                                    >
                                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                                            {exp.role}
                                        </Typography>
                                        <Typography variant="subtitle1" color="secondary" sx={{ mb: 1 }}>
                                            {exp.company}
                                        </Typography>
                                        <Typography variant="caption" display="block" sx={{ mb: 2, color: 'text.secondary', fontStyle: 'italic' }}>
                                            {exp.period}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {exp.description}
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Experience;
