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
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
} as SchemaTypeDefinition;
