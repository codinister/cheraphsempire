import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),

    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
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
