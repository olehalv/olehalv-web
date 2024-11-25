import { Config, defineConfig } from 'sanity';
import { schemas } from './schemas';
import { structureTool } from 'sanity/structure';
import { createClient } from '@sanity/client';

export const config = defineConfig<Config>({
  name: 'olehalv-web-studio',
  title: 'Sanity Studio',

  projectId: '3qfeo26x',
  dataset: 'production',
  basePath: '/studio',

  plugins: [structureTool(undefined)],

  schema: {
    types: schemas,
  },
});

export const client = createClient({
  projectId: '3qfeo26x',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-11-25',
});
