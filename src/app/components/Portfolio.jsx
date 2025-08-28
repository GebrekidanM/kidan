import PortfolioClient from "./PortfolioClient";

const projects = [
  {
    title: "Nitsuh Academy - School Management System",
    description:
      "A full-stack SaaS platform built from scratch to digitize and streamline school administration, from student registration to automated report card generation.",
    imageUrl: "/nitsuh.PNG",
    liveUrl: "https://nitsuh-academy.netlify.app/",
    githubUrl: "https://github.com/GebrekidanM/Academic-result-management",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "SaaS"],
  },
  {
    title: "goViral Solutions - Marketing Website",
    description:
      "A modern, responsive, and production-ready marketing website developed for a real-world client to enhance their online presence.",
    imageUrl: "/goviral.PNG",
    liveUrl: "http://www.goviralsol.com/",
    githubUrl: "https://github.com/GebrekidanM/goViral",
    tags: ["React", "Tailwind CSS", "Freelance"],
  },
  {
    title: "Automated Timetable Generator",
    description:
      "An intelligent web application that automates the complex process of creating balanced, conflict-free school schedules.",
    imageUrl: "/timetable-screenshot.png",
    liveUrl: "#",
    githubUrl: "https://github.com/GebrekidanM/timetable-generator",
    tags: ["React", "Node.js", "Algorithm"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My Work
        </h2>
        <PortfolioClient projects={projects} />
      </div>
    </section>
  );
}
