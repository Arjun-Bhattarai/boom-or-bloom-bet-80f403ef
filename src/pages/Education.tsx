
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'NCIT, Pokhara University',
      location: 'Pokhara, Nepal',
      period: '2024 - 2028',
      status: 'Currently Pursuing',
      description: 'Comprehensive program covering software development, database management, networking, and emerging technologies.',
      highlights: [
        'Core Programming Languages',
        'Web Development',
        'Database Systems',
        'Software Engineering',
        'Computer Networks'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Shree Amar Secondary School',
      location: 'Ilam, Nepal',
      period: '2021 - 2023',
      gpa: '3.45',
      status: 'Completed',
      description: 'Science stream with focus on Mathematics, Physics, and Computer Science.',
      highlights: [
        'Mathematics',
        'Physics',
        'Computer Science',
        'Chemistry',
        'English'
      ]
    },
    {
      degree: 'Secondary Education',
      institution: 'Shree Amar Secondary School',
      location: 'Ilam, Nepal',
      period: '2019 - 2020',
      gpa: '3.6',
      status: 'Completed',
      description: 'Strong foundation in core subjects with excellent academic performance.',
      highlights: [
        'Science',
        'Mathematics',
        'Social Studies',
        'English',
        'Computer'
      ]
    }
  ];

  const achievements = [
    'Consistent Academic Performance',
    'Active in School Technology Club',
    'Participated in Programming Competitions',
    'Leadership in Group Projects'
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
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <CardTitle className="text-xl text-primary">
                          {edu.degree}
                        </CardTitle>
                        <Badge variant={edu.status === 'Currently Pursuing' ? 'default' : 'secondary'}>
                          {edu.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <Badge key={hIndex} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Academic Achievements</h2>
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
