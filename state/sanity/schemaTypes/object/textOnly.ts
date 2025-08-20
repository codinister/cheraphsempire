import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'textonly',
  title: 'Text',
  type: 'array',
  of: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    })
  ],
});
