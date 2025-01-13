import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{props.title}</h3>
                <p className="text-gray-600 mb-4">{props.description}</p>
                <p className="text-sm text-gray-500"><strong>Technologies:</strong> {props.technologies}</p>
            </div>
        </div>
    );
}
