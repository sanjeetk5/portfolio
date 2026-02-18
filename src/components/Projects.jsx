import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Invoice from "../assets/Invoice.png"
import Littlab from "../assets/Littlab.png"

const projects = [
    {
        title: 'Invoice Management System',
        description: 'A comprehensive dashboard for managing online stores, featuring real-time analysis.',
        image: Invoice,
        tags: ['React', 'MUI', 'Redux', 'Jwt', 'ExpressJS', 'MongoDB'],
        githubLink: 'https://github.com/sanjeetk5/Meru_Technosoft_Assignment.git',
        liveLink: 'https://invoice-frontend-amber.vercel.app/'
    },
    {
        title: 'Littlab Iot App',
        description: 'Littlab is an IoT-based smart monitoring project designed to collect, process, and visualize real-time sensor data for efficient tracking and automation.',
        image: Littlab,
        tags: ['React', 'TypeScript', 'Tailwind', 'MUI', 'IOT'],
        githubLink: 'https://github.com/ankitjangidx/frontend',
        liveLink: 'https://littlab.customlitt.com/'
    },
    // {
    //     title: 'Task Management Tool',
    //     description: 'A productivity app to help teams organize tasks and collaborate effectively.',
    //     image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80',
    //     tags: ['React', 'Firebase', 'Redux'],
    //     githubLink: '#',
    //     liveLink: '#'
    // }
];

const Projects = () => {
    const theme = useTheme();

    return (
        <Box id="projects" sx={{ py: 10 }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            background: `linear-gradient(45deg, #fff, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: 2
                        }}
                    >
                        Featured Projects
                    </Typography>
                    <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 6 }}>
                        Level up your experience with some of my recent builds.
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid width={"100%"} item xs={12} sm={6} md={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <Card
                                    component={motion.div}
                                    whileHover={{
                                        y: -15,
                                        scale: 1.03,
                                        boxShadow: `0 0 30px ${theme.palette.secondary.main}50`,
                                        borderColor: theme.palette.secondary.main
                                    }}
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: { xs: "column", md: "row", sm: "column" },
                                        background: theme.palette.background.paper,
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        position: 'relative'
                                    }}
                                >
                                    <Box sx={{ position: 'relative', overflow: 'hidden', width: { xs: '100%', md: '40%' }, minWidth: { md: '40%' }, height: { md: '100%' } }}>
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            alt={project.title}
                                            sx={{
                                                height: { xs: 200, md: '100%' },
                                                width: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s ease',
                                                '&:hover': { transform: 'scale(1.1)' }
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                                opacity: 0.6
                                            }}
                                        />
                                    </Box>

                                    <CardContent sx={{ flexGrow: 1, zIndex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            color="primary"
                                            fontWeight="bold"
                                            sx={{
                                                display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 1,
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            paragraph
                                            sx={{
                                                display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 3,
                                                minHeight: '4.5em', // Approx 3 lines of text
                                            }}
                                        >
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ mt: 'auto', minHeight: '60px' }}>
                                            {project.tags.map(tag => (
                                                <Typography
                                                    key={tag}
                                                    variant="caption"
                                                    sx={{
                                                        mr: 1,
                                                        p: 0.5,
                                                        px: 1,
                                                        border: `1px solid ${theme.palette.primary.main}40`,
                                                        borderRadius: 1,
                                                        color: theme.palette.text.primary,
                                                        background: 'rgba(0,0,0,0.2)',
                                                        display: 'inline-block',
                                                        mb: 1
                                                    }}
                                                >
                                                    {tag}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{ p: 2, pt: 0, display: 'flex', gap: 1 }}>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="inherit"
                                            startIcon={<GitHubIcon />}
                                            href={project.githubLink}
                                            target="_blank"
                                            sx={{
                                                flex: 1,
                                                borderColor: 'rgba(255,255,255,0.1)',
                                                color: 'text.secondary',
                                                '&:hover': {
                                                    borderColor: theme.palette.primary.main,
                                                    color: theme.palette.primary.main,
                                                    background: 'rgba(255,255,255,0.05)'
                                                }
                                            }}
                                        >
                                            Github
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            startIcon={<LaunchIcon />}
                                            href={project.liveLink}
                                            target="_blank"
                                            sx={{
                                                flex: 1,
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Live
                                        </Button>
                                    </CardActions>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
