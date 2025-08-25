import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'history',
  title: 'History',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),

    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'textcard'}]
    }),

    defineField({
      name: 'Image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
