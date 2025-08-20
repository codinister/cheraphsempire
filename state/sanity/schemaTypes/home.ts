import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Main image field required!'),
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',   
      of: [{type: 'imagecard'}],
    }),
  ],
});
