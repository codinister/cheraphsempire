import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'imageonly',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image field required!'),
      options: {
        hotspot: true,
      },
    }),
  ],
});
