import { defineField, SchemaTypeDefinition } from 'sanity';

export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'undertittel',
      type: 'string',
    }),
  ],
} as SchemaTypeDefinition;
