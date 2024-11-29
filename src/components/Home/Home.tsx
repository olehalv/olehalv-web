import useSanityFetch from '../../hooks/useSanityFetch.ts';
import Loading from '../common/Loading.tsx';
import Layout from '../common/Layout.tsx';
import urlFor from '../../functions/urlFor.ts';

import './home.css';
import { SanityImageReference } from '../../types.ts';
import { PortableText, PortableTextBlock } from '@portabletext/react';

const Home = () => {
  const data = useSanityFetch<{
    content: PortableTextBlock;
    socials: Array<{
      title: string;
      url: string;
      logo: SanityImageReference;
    }>;
  }>('*[_type == "home"][0]');

  if (!data) return <Loading />;

  return (
    <Layout>
      <PortableText value={data.content} />
      <div className="socials">
        {data.socials.map((social) => (
          <a href={social.url} target="_blank" key={social.title}>
            <img
              src={urlFor(social.logo.asset._ref).width(50).height(50).url()}
              alt={social.title}
            />
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
