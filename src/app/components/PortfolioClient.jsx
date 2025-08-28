"use client";

import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function PortfolioClient({ projects }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={itemVariants}>
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
