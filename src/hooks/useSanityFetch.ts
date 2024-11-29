import client from '../studio/lib/client.ts';
import { useEffect, useState } from 'react';

const useSanityFetch = <T>(groq: string): T | undefined => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const f = async (groq) => await client.fetch<T>(groq);

    f(groq).then((r) => setData(r));
  }, [groq]);

  return data;
};

export default useSanityFetch;
