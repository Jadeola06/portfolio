import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard.js";
import axios from "axios";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
            <div className="container mx-auto p-8">
                {/* About Me Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-purple-800">Joseph Adeola</h1>
                    <h4 className="text-2xl text-blue-600 mt-2">Full Stack Software Engineer</h4>
                    <p className="text-lg text-gray-700 mt-4">
                        I am a passionate full-stack developer with experience in building scalable and efficient applications.
                        I specialize in both front-end and back-end development, using technologies like React, Spring Boot, and more.
                    </p>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-semibold text-purple-800 mb-8">Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {['React', 'SpringBoot', 'JavaScript', 'Flutter', 'AWS', 'Docker', 'SQL', 'Kubernetes'].map(skill => (
                            <div key={skill} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-center p-4 rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 transition-colors duration-300 transform hover:scale-105">
                                {skill}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl font-semibold text-purple-800 mb-8">Projects</h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <ProjectCard
                            title="Expense Tracker Application"
                            description="Manage your finances effortlessly with this app. Track expenses, set budget goals, and gain insights."
                            technologies="React.js, Springboot, CSS, RESTful API"
                            image="https://static.sheetgo.com/wp-content/uploads/2020/05/icons-expense-tracker.svg"
                            link="https://example.com/expense-tracker"
                        />
                        <ProjectCard
                            title="Mobile Budgeting App"
                            description="A mobile app created with Flutter and Dart to help you track your finances."
                            technologies="Flutter, Dart, SQL"
                            image="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*PiEaWUoTxVFPU-Nr2k2J_Q.png"
                            link="https://example.com/mobile-budgeting"
                        />
                        <ProjectCard
                            title="Quiz Website"
                            description="A minimalist quiz website powered by React.js with questions from an external API."
                            technologies="React.js, CSS, API Integration"
                            image="https://static.vecteezy.com/system/resources/previews/003/206/208/non_2x/quiz-time-neon-signs-style-text-free-vector.jpg"
                            link="https://example.com/quiz-website"
                        />
                    </div>
                </motion.div>

                {/* Full Stack Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-16"
                >
                    <h2 className="text-3xl font-semibold text-purple-800 mb-8">Deploying Full-Stack Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProjectCard
                            title="Full-Stack App"
                            description="A deployed full-stack application with real-time data updates and user authentication."
                            technologies="React.js, Node.js, MongoDB, AWS"
                            image="https://image.shutterstock.com/image-vector/full-stack-development-concept-web-260nw-1509533706.jpg"
                            link="https://example.com/full-stack-app"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
