import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Wrench } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and a clean design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      status: 'Completed',
      image: '/placeholder.svg',
      github: 'https://github.com/Arjun-Bhattarai',
      live: 'https://arjunbhattarai8.com.np',
      featured: true
    },
    {
      title: 'Task Management System',
      description: 'A full-stack web application for managing tasks and projects with user authentication and real-time updates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      status: 'In Progress',
      image: '/placeholder.svg',
      github: 'https://github.com/Arjun-Bhattarai',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts using external APIs.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      status: 'Completed',
      image: '/placeholder.svg',
      github: 'https://github.com/Arjun-Bhattarai',
    },
    {
      title: 'Student Management System',
      description: 'A database-driven application for managing student records, grades, and academic information.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      status: 'Completed',
      image: '/placeholder.svg',
      github: 'https://github.com/Arjun-Bhattarai',
    },
    {
      title: 'E-commerce Landing Page',
      description: 'A modern, responsive landing page for an e-commerce platform with interactive elements and smooth animations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      status: 'Completed',
      image: '/placeholder.svg',
      github: 'https://github.com/Arjun-Bhattarai',
    },
    {
      title: 'Calculator App',
      description: 'A scientific calculator application with a modern UI and advanced mathematical functions.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      status: 'Completed',
      image: '/placeholder.svg',
      github: 'https://github.com/Arjun-Bhattarai',
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-blue-500';
      case 'Planning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                    <Wrench className="h-16 w-16 text-primary/50" />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline" className={`${getStatusColor(project.status)} text-white`}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      {project.live && (
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant="outline" className={`${getStatusColor(project.status)} text-white text-xs`}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and learning new technologies. 
                Check back often to see what I'm building next!
              </p>
              <Button>
                <Github className="h-4 w-4 mr-2" />
                Follow on GitHub
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
