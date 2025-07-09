
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'Python', level: 80, color: 'bg-blue-500' },
        { name: 'C++', level: 75, color: 'bg-blue-600' },
        { name: 'C', level: 70, color: 'bg-gray-600' },
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: [
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
        { name: 'React', level: 80, color: 'bg-blue-400' },
        { name: 'Node.js', level: 70, color: 'bg-green-500' },
        { name: 'TypeScript', level: 75, color: 'bg-blue-700' },
      ]
    },
    {
      icon: Database,
      title: 'Database & Backend',
      skills: [
        { name: 'MySQL', level: 80, color: 'bg-blue-600' },
        { name: 'PHP', level: 70, color: 'bg-purple-500' },
        { name: 'MongoDB', level: 65, color: 'bg-green-600' },
        { name: 'REST APIs', level: 75, color: 'bg-indigo-500' },
      ]
    },
    {
      icon: Settings,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 85, color: 'bg-gray-800' },
        { name: 'VS Code', level: 90, color: 'bg-blue-500' },
        { name: 'Linux', level: 70, color: 'bg-yellow-600' },
        { name: 'Docker', level: 60, color: 'bg-blue-400' },
      ]
    }
  ];

  const certifications = [
    'Web Development Fundamentals',
    'Python Programming Basics',
    'Database Design Principles',
    'Version Control with Git'
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
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <category.icon className="h-6 w-6 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Learning & Growth</h2>
          <Card className="p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle>Certifications & Achievements</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-wrap gap-3 justify-center">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                    {cert}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground mt-6">
                Continuously learning and expanding my skill set through online courses, 
                workshops, and hands-on projects.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
