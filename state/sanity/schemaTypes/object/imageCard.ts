import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'imagecard',
  title: 'Image Card',
  type: 'object',
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
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required().error('Content field required!'),
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
