import { ProjectType } from './Projects.tsx';
import urlFor from '../../functions/urlFor.ts';

import '../Skills/skills.css';

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <a href={project.url}>{project.url}</a>
      <p>{project.summary}</p>
      <div className="skills">
        {project.skills.map(({ skill, logo }) => (
          <div key={skill}>
            <img
              src={urlFor(logo.asset._ref).width(20).height(20).url()}
              alt={skill}
            />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
