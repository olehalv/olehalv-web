import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '3qfeo26x',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-11-11',
});

export default client;
