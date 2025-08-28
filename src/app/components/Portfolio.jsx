"use client"; 
import React from 'react';
import ProjectCard from '../../components/ProjectCard'; // <-- 1. IMPORT IT
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nitsuh Academy - School Management System',
    description: 'A full-stack SaaS platform built from scratch to digitize and streamline school administration, from student registration to automated report card generation.',
    imageUrl: '/nitsuh-screenshot.png',
    liveUrl: 'https://nitsuh-academy.netlify.app/',
    githubUrl: 'https://github.com/GebrekidanM/Academic-result-management',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'SaaS']
  },
  {
    title: 'goViral Solutions - Marketing Website',
    description: 'A modern, responsive, and production-ready marketing website developed for a real-world client to enhance their online presence.',
    imageUrl: '/goviral-screenshot.png',
    liveUrl: 'http://www.goviralsol.com/',
    githubUrl: 'https://github.com/GebrekidanM/goViral',
    tags: ['React', 'Tailwind CSS', 'Freelance']
  },
  {
    title: 'Automated Timetable Generator',
    description: 'An intelligent web application that automates the complex process of creating balanced, conflict-free school schedules.',
    imageUrl: '/timetable-screenshot.png', // We'll add this image later
    liveUrl: '#', // Add link if you deploy it
    githubUrl: 'https://github.com/GebrekidanM/timetable-generator', // Replace with correct repo link
    tags: ['React', 'Node.js', 'Algorithm']
  }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };


const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-50 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My Work
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              tags={project.tags}
            />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;