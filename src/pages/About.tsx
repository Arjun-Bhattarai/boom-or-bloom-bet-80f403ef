
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Code, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const interests = [
    'Web Development', 'Machine Learning', 'Cloud Computing', 'Open Source',
    'UI/UX Design', 'Mobile Development', 'DevOps', 'Cybersecurity'
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that others can understand and build upon.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always looking for creative solutions to complex problems and staying updated with latest technologies.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and open communication to achieve extraordinary results.'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Creating technology solutions that make a positive difference in people\'s lives and communities.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that matter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 h-full">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">My Story</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Arjun Bhattarai, a passionate IT student with a love for turning ideas into digital reality. 
                  Currently pursuing my Bachelor's degree at NCIT, Pokhara University, I'm focused on building innovative, 
                  responsive, and user-friendly web experiences.
                </p>
                <p>
                  My journey in technology started with curiosity about how websites work, which led me to explore 
                  various programming languages and frameworks. I enjoy learning new technologies and contributing 
                  to impactful projects that solve real-world problems.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, reading about the latest trends 
                  in software development, or working on side projects that challenge my skills and creativity.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span>Ilam, Nepal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">University</span>
                  <span>NCIT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Degree</span>
                  <span>Bachelor of IT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected Grad</span>
                  <span>2028</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl">Interests</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
