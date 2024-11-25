import { Config, defineConfig } from 'sanity';
import { schemas } from './schema';
import { structureTool } from 'sanity/structure';

const singletons = new Set(['home']);

export const config = defineConfig<Config>({
  name: 'olehalv-web-studio',
  title: 'Sanity Studio',

  projectId: '3qfeo26x',
  dataset: 'production',
  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .id('Content')
          .title('Content')
          .items([
            S.listItem()
              .id('homeSingleton')
              .title('Home')
              .child(S.document().schemaType('home').documentId('home')),
            ...S.documentTypeListItems().splice(
              S.documentTypeListItems().findIndex((it) =>
                singletons.has(it.getSchemaType().toString())
              ),
              1
            ),
          ]),
    }),
  ],

  schema: {
    types: schemas,

    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletons.has(schemaType)),
  },
});
