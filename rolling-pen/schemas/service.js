export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: `Service's Image`,
    },
    {
      name: 'title',
      type: 'string',
      title: 'Service Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.max(300),
    },
    // {
    //   name: 'type',
    //   type: 'reference',
    //   title: 'Categories',
    //   validation: (Rule) => Rule.required(),
    //   to: [{type: 'categories'}],
    // },
    //   {
    //     name: 'dishes',
    //     type: 'array',
    //     title: 'Dishes',
    //     validation: (Rule) => Rule.required(),
    //     of: [{type: 'reference', to: [{type: 'dishes'}]}],
    //   },
  ],
}
