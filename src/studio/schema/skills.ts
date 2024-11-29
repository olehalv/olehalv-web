import { defineField, SchemaTypeDefinition } from 'sanity';

export default {
  title: 'Skills',
  name: 'skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skill',
      type: 'string',
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Languages', value: 'Languages' },
          { title: 'Frameworks', value: 'Frameworks' },
          { title: 'Libraries', value: 'Libraries' },
          { title: 'Cloud', value: 'Cloud' },
          { title: 'CI/CD', value: 'CI/CD' },
          { title: 'CMS', value: 'CMS' },
          { title: 'Other', value: 'Other' },
        ],
      },
    }),
    defineField({
      name: 'logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
} as SchemaTypeDefinition;
