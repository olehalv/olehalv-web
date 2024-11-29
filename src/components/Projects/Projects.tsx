import Layout from '../common/Layout.tsx';
import useSanityFetch from '../../hooks/useSanityFetch.ts';
import Loading from '../common/Loading.tsx';
import { SanityImageReference } from '../../types.ts';
import { PortableTextBlock } from '@portabletext/react';
import Project from './Project.tsx';

import './projects.css';

export interface ProjectType {
  title: string;
  url: string;
  summary: string;
  skills: Array<{
    skill: string;
    logo: SanityImageReference;
  }>;
  description: Array<PortableTextBlock>;
}

const Projects = () => {
  const data = useSanityFetch<Array<ProjectType>>(
    '*[_type == "projects"]{title, url, summary, description, "skills": skills[] -> {skill, logo}}'
  );

  if (!data) return <Loading />;

  return (
    <Layout>
      <h2 className="text-center">projects</h2>
      <div className="projects">
        {data.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
