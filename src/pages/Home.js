import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard.js";
import axios from 'axios';

export default function Home() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://18.191.202.13:8080/api/v1/client', {
                    withCredentials: true,
                });
                console.log(response.data);
            } catch (error) {
                console.error('There was an error fetching the members!', error);
            }
        };

        fetchData(); // Call fetchData inside useEffect
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
            <div className="container mx-auto p-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-purple-800">Joseph Adeola</h1>
                    <h4 className="text-2xl text-blue-600 mt-2">Full Stack Software Engineer</h4>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-semibold text-purple-800 mb-8">Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {['HTML, CSS, JavaScript', 'React JS', 'Flutter', 'SpringBoot', 'RESTful API design', 'SQL', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure'].map(skill => (
                            <div key={skill} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-center p-4 rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 transition-colors duration-300">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-purple-800 mb-8">Projects</h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <ProjectCard 
                            title="Expense Tracker Application" 
                            description="Manage your finances effortlessly with my Expense Tracker application. It's a simple tool designed to help you keep track of your expenses, set budget goals, and gain insights into your spending patterns. Stay organized and make informed financial decisions." 
                            technologies="React.js, Springboot, CSS, RESTful API Design"
                            image="https://static.sheetgo.com/wp-content/uploads/2020/05/icons-expense-tracker.svg"
                        />
                        <ProjectCard 
                            title="Mobile Budgeting App" 
                            description="A mobile app that helps to simplify your finances on the fly. Created with Flutter and Dart. Effortlessly track expenses and set spending limits."
                            technologies="Flutter, SQL, Dart"
                            image="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*PiEaWUoTxVFPU-Nr2k2J_Q.png"
                        />
                        <ProjectCard 
                            title="Quiz Website" 
                            description="A minimalist quiz website powered by React.js. Delve into a variety of subjects with questions sourced from an external API, ensuring fresh and diverse content."
                            technologies="React.js, CSS, API Integration"
                            image="https://static.vecteezy.com/system/resources/previews/003/206/208/non_2x/quiz-time-neon-signs-style-text-free-vector.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
