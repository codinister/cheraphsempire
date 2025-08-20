import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Services',
      type: 'string',
      validation: (Rule) => Rule.required().error('Services field required!'),
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'imagecard' }],
      validation: (Rule) => Rule.required().error('Cards field required!'),
    }),
  ],
});
