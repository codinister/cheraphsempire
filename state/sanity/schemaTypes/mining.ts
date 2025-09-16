import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'mining',
  title: 'Mining',
  type: 'document',
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
      name: 'images',
      title: 'Images',
      type: 'array',   
      of: [{type: 'imageonly'}],
    }),
  ],
});
