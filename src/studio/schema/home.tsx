import { defineField, SchemaTypeDefinition } from 'sanity';

const highlightDecorator = (props) => (
  <span style={{ color: 'dodgerblue' }}>{props.children}</span>
);

export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {
                title: 'Hightlight',
                value: 'highlight',
                component: highlightDecorator,
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'url', type: 'url' },
            { name: 'logo', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
  ],
} as SchemaTypeDefinition;
