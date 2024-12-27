import React from 'react';

import Nav from "../Nav.js";
import ProjectCard from "../components/ProjectCard.js"
import biyarLogo from "../components/Logo.png"

export default function Home(){


    return(
        <div className='Home'>
            <Nav />
            <div className='home-page'>
                <div className='about'>
                    <h1 id='name'>Joseph Adeola</h1>
                    <h4 id='title'>Software Engineer</h4>
                </div>
                <div className='skills'>
                    <h2>Skills</h2>
                    <div className='list-items'>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                            <li>React JS</li>
                            <li>Flutter</li>
                            <li>SpringBoot</li>
                            <li>RESTful API design</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='projects'>
                <p>PROJECTS</p>
                <a href="https://biyartech.com" target="_blank" rel="noopener noreferrer">
                    <ProjectCard 
                        title={'BiyarTech Home Page'} 
                        description={'A front-end website showcasing a modern design with responsiveness and interactive features. Built using React and Tailwind CSS.'} 
                        id={0}
                        technologies="React.js, Tailwind CSS"
                        image={biyarLogo}
                    />
                </a>
                <ProjectCard 
                    title = {'Expense Tracker Application'} 
                    description = {'Manage your finances effortlessly with my Expense Tracker application. It\'s a simple tool designed to help you keep track of your expenses, set budget goals, and gain insights into your spending patterns. Stay organized and make informed financial decisions. Give it a try and simplify your budgeting today.'} 
                    id = {0}
                    technologies = "React.js, Springboot, CSS, RESTful API Design"
                    image  = 'https://static.sheetgo.com/wp-content/uploads/2020/05/icons-expense-tracker.svg'/>
                <ProjectCard 
                    title = {'Real Estate & Property Online Market'} 
                    description = {'Property.com is a comprehensive platform for buying and selling homes and properties. Users can explore a wide range of listings, from cozy apartments to spacious houses, and find their perfect match. Sellers can easily list their properties and connect with potential buyers. Our site also provides valuable resources and tools to help users make informed decisions about their real estate transactions.'} 
                    id = {0}
                    technologies = "React.js, Springboot, CSS, RESTful API Design, Google Map API, Google Sign in API"
                    image  = 'https://img.freepik.com/premium-photo/big-american-house-generative-ai_170984-9624.jpg'/>
                <ProjectCard 
                title = {'Mobile Budgeting App'} 
                description = {'A mobile app that helps to simplify your finances on the fly. Created with Flutter and Dart. Effortlessly track expenses and set spending limits.'}
                 id = {0} 
                 technologies = {'Flutter, SQL, Dart'}
                 image = {'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*PiEaWUoTxVFPU-Nr2k2J_Q.png'}/>
                <ProjectCard 
                    title = {'Quiz Website'} 
                    description = {'A minimalist quiz website powered by React.js. Delve into a variety of subjects with questions sourced from an external API, ensuring fresh and diverse content.'} 
                    id = {0}
                    technologies = "React.js, CSS, API Integeration"
                    image = 'https://static.vecteezy.com/system/resources/previews/003/206/208/non_2x/quiz-time-neon-signs-style-text-free-vector.jpg'/>
            </div>
        </div>
    )
}
