import Layout from '../common/Layout.tsx';
import useSanityFetch from '../../hooks/useSanityFetch.ts';
import Loading from '../common/Loading.tsx';
import { SanityImageReference } from '../../types.ts';
import urlFor from '../../functions/urlFor.ts';

const Skills = () => {
  const data = useSanityFetch<
    Array<{
      skill: string;
      category: string;
      logo: SanityImageReference;
    }>
  >('*[_type == "skills"]');

  if (!data) return <Loading />;

  const categories = Array.from(new Set(data.map(({ category }) => category)))
    .sort()
    .reverse();

  return (
    <Layout>
      <h2 className="text-center">skills</h2>
      <div className="skills">
        {categories.map((category) => (
          <div className="skill-wrapper">
            <h3>{category.toLowerCase()}</h3>
            {data
              .filter((it) => it.category == category)
              .map(({ skill, logo }) => (
                <div className="skill" key={skill}>
                  <img
                    src={urlFor(logo.asset._ref).width(20).height(20).url()}
                    alt={skill}
                  />
                  <span>{skill}</span>
                </div>
              ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
