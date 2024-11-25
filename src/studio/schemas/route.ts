import { defineField, SchemaTypeDefinition } from 'sanity';

export default {
  name: 'routes',
  title: 'Routes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'route',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase(),
      },
    }),
  ],
} as SchemaTypeDefinition;
