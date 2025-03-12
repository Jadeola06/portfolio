import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard.js";
import { motion } from "framer-motion";

export default function Home() {

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto p-8">
                {/* About Me Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-white">Joseph Adeola</h1>
                    <h4 className="text-2xl text-gray-400 mt-2">Full Stack Software Engineer</h4>
                    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                        I am a passionate full-stack developer specializing in building scalable and efficient web applications.
                        My expertise spans both front-end and back-end technologies, and I focus on creating clean, maintainable code.
                    </p>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-semibold text-white mb-8">Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {['React', 'Node.js', 'SpringBoot', 'Docker', 'AWS', 'Flutter', 'SQL', 'Kubernetes'].map(skill => (
                            <div key={skill} className="bg-gray-800 text-white font-semibold text-center p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                                <span className="text-4xl">{/* Add appropriate icons here */}</span>
                                <p className="mt-4">{skill}</p>
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
                    <h2 className="text-3xl font-semibold text-white mb-8">Projects</h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <ProjectCard
                            title="Expense Tracker Application"
                            description="Track your expenses, set budget goals, and analyze your financial habits with this app."
                            technologies="React.js, Spring Boot, RESTful API"
                            image="https://static.sheetgo.com/wp-content/uploads/2020/05/icons-expense-tracker.svg"
                            link="https://example.com/expense-tracker"
                        />
                        <ProjectCard
                            title="Mobile Budgeting App"
                            description="A mobile app created with Flutter and Dart to help you manage your finances on the go."
                            technologies="Flutter, Dart, SQL"
                            image="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*PiEaWUoTxVFPU-Nr2k2J_Q.png"
                            link="https://example.com/mobile-budgeting"
                        />
                        <ProjectCard
                            title="Quiz Website"
                            description="A quiz website powered by React.js with API integration for dynamic content."
                            technologies="React.js, CSS, API Integration"
                            image="https://static.vecteezy.com/system/resources/previews/003/206/208/non_2x/quiz-time-neon-signs-style-text-free-vector.jpg"
                            link="https://example.com/quiz-website"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
