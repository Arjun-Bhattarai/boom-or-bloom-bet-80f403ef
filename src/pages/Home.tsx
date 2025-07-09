
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'Full Stack Developer',
    'IT Student',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const typeText = () => {
      const fullText = texts[textIndex];
      if (currentText.length < fullText.length) {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentText('');
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [currentText, textIndex, texts]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Arjun Bhattarai
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 h-8"
            >
              {currentText}
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              A passionate IT student dedicated to building tech-driven solutions that address 
              real-world challenges, with a focus on sustainability, automation, and community impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-4 justify-center lg:justify-start mt-8"
            >
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
              <div className="aspect-square bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                AB
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
