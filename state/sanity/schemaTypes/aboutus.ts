import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutus',
  title: 'About Us',
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
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'textonly' }],
    }),

    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'textcard' }],
      validation: (Rule) => Rule.required().error('Cards field required!'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
  ],
});
