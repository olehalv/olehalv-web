import { defineField, SchemaTypeDefinition } from 'sanity';

export default {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
    defineField({
      name: 'summary',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skills' }],
        },
      ],
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
} as SchemaTypeDefinition;
