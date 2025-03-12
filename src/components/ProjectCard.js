import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, technologies, image, link }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="w-full h-48 object-cover grayscale transition-all duration-300 hover:grayscale-0" />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 mb-4">{description}</p>
                    <p className="text-sm text-gray-400"><strong>Technologies:</strong> {technologies}</p>
                </div>
            </a>
        </motion.div>
    );
}
