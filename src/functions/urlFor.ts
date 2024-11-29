import urlBuilder from '@sanity/image-url';
import client from '../studio/lib/client.ts';

const urlFor = (source: string) => urlBuilder(client).image(source);

export default urlFor;
