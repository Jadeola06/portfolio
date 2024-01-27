import React from 'react';

export default function ProjectCard(props){
    return (
        <div className="project-card">
          <div >
            <img id='project-image'src={props.image} alt={props.title} />
          </div>
          <div>
            <h3 id='project-title'>{props.title}</h3>
            <p id='paragraph-expl'>{props.description}</p>
            {/*<Link to={`/projects/${props.id}`}>Learn More</Link>*/}
            <h5 id = "tech">Technologies: {props.technologies}</h5>
          </div>
        </div>
      );
}
