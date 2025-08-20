import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'textcard',
  title: 'Text Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required().error('Content field required!'),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      validation: (Rule) => Rule.required().error('Icon field required!'),
    }),
  ],
});
