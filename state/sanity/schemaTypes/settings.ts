import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Company Name field required!'),
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required().error('Location field required!'),
    }),

    defineField({
      name: 'working_hours',
      title: 'Working Hours',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Working Hours field required!'),
    }),

    defineField({
      name: 'phone1',
      title: 'Phone One',
      type: 'string',
    }),

    defineField({
      name: 'phone2',
      title: 'Phone Two',
      type: 'string',
    }),

    defineField({
      name: 'phone3',
      title: 'Phone Three',
      type: 'string',
    }),

    defineField({
      name: 'phone4',
      title: 'Phone Four',
      type: 'string',
    }),

    defineField({
      name: 'whatsapp',
      title: 'Whatsapp Number',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().error('Email field required!'),
    }),

    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      validation: (Rule) => Rule.required().error('Facebook field required!'),
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      validation: (Rule) => Rule.required().error('Instagram field required!'),
    }),

    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
      validation: (Rule) => Rule.required().error('Twitter field required!'),
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule) => Rule.required().error('Logo field required!'),
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    }),

    defineField({
      name: 'phone5',
      title: 'Phone Five',
      type: 'string',
    }),

    defineField({
      name: 'flag',
      title: 'Flag',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
  ],
});
